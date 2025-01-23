let mapInstance = null;

export const Map = ({ latitude, longitude, city }) => {
	// Verifica si ya existe una instancia del mapa y destrúyela
	if (mapInstance) {
		mapInstance.remove();
	}

	// Inicializa el mapa
	mapInstance = L.map('map').setView([latitude, longitude], 13);

	// Añade una capa base con OpenStreetMap
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '© OpenStreetMap contributors',
	}).addTo(mapInstance);

	// Agrega un marcador con popup
	L.marker([latitude, longitude]).addTo(mapInstance).bindPopup(`IP location is ${city}`).openPopup();
};
