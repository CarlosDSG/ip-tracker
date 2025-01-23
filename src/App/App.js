import { addDataToHtml } from './components/dataToHtml';
import { Map } from './components/Map';
import { checkIP } from './functions/checkIp';
import { requestApi } from './functions/requestApi';

let input_ip = document.getElementById('ip-address');
let button = document.getElementById('btn');

export const App = async () => {
	document.addEventListener('DOMContentLoaded', () => {
		//
		let ip_address;
		let apiData;

		input_ip.addEventListener('keyup', () => {
			ip_address = input_ip.value;
			input_ip.value;
			checkIP(ip_address, button);
		});

		button.addEventListener('click', async (e) => {
			e.preventDefault();
			apiData = await requestApi(ip_address);
			let {
				latitude,
				longitude,
				countryName,
				timeZone,
				zipCode,
				cityName,
				regionName,
				continent,
				currency,
				language,
			} = apiData;

			addDataToHtml({
				continent,
				country: countryName,
				region: regionName,
				city: cityName,
				postalCode: zipCode,
				language,
				timeZone,
				currency: currency.name,
			});
			Map({ latitude, longitude, city: cityName });
		});
	});
};
