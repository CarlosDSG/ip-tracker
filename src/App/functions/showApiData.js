import { requestApi } from './requestApi';

export const showApiData = async (ip) => {
	let userIpData = await requestApi(ip);
};
