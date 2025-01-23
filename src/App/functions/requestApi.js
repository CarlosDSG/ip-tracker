import axios from 'axios';

export const requestApi = async (ip) => {
	const keysToFilter = [
		'latitude',
		'longitude',
		'countryName',
		'timeZone',
		'zipCode',
		'cityName',
		'regionName',
		'continent',
		'currency',
		'language',
	];

	let filteredData = {};
	const options = {
		method: 'GET',
		url: `https://freeipapi.com/api/json/${ip}?fields=${keysToFilter.join(',')}`,
	};

	try {
		const response = await axios.request(options);
		let responseData = response.data;

		filteredData = keysToFilter.reduce((acc, key) => {
			if (responseData[key] !== undefined) {
				acc[key] = responseData[key];
			}
			return acc;
		}, {});
	} catch (error) {
		console.error(error);
	}

	return filteredData;
};
