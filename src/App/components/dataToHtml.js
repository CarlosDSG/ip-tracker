let ids = ['continent', 'country', 'region', 'city', 'capital', 'postalCode', 'language', 'timeZone', 'currency'];

// Obtener los elementos del DOM y almacenarlos en el objeto elements
let elements = {};
ids.forEach((id) => {
	elements[id] = document.getElementById(id);
});

// La función recibirá los datos desestructurados como parámetros
export const addDataToHtml = ({
	continent,
	country,
	region,
	city,
	capital,
	postalCode,
	language,
	timeZone,
	currency,
}) => {
	// Creamos un objeto con los datos que queremos asignar
	const data = { continent, country, region, city, capital, postalCode, language, timeZone, currency };

	// Usamos un bucle para asignar los valores a los elementos del DOM
	for (let key in data) {
		if (data.hasOwnProperty(key) && elements[key]) {
			elements[key].textContent = data[key];
		}
	}
};
