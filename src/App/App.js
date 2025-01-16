import { checkIP } from './functions/checkIp';

let input_ip = document.getElementById('ip-address');
let button = document.getElementById('btn');

export const App = () => {
	document.addEventListener('DOMContentLoaded', () => {
		input_ip.addEventListener('keyup', () => {
			checkIP(input_ip.value, button);
		});
	});
};
