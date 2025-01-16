export const checkIP = (ip, button) => {
	const validIp = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

	if (validIp.test(ip) && ip.length > 0) {
		button.disabled = false; // Habilitar el botón
		button.classList.add('bg-slate-700'); // Agregar la clase cuando esté habilitado
	} else {
		button.disabled = true; // Deshabilitar el botón
		button.classList.remove('bg-slate-700'); // Quitar la clase cuando esté deshabilitado
	}
};
