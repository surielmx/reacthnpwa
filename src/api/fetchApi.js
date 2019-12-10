import { BASE_URL, URL_VERSION } from '../constants/endpoints';

const options = {
	method: 'GET',
	headers: {
		Accept: 'application/json',
	},
};

export const getStoryPage = async (type, page) => {
	const query = `${BASE_URL}${URL_VERSION}/${type}/${page}.json`;
	const instance = await fetch(query, options);
	const response = await instance.json();
	return response;
};

export const getStoryItem = async id => {
	const query = `${BASE_URL}${URL_VERSION}/item/${id}.json`;
	const instance = await fetch(query, options);
	const response = await instance.json();
	return response;
};

export const getStoryUser = async user => {
	const query = `${BASE_URL}${URL_VERSION}/user/${user}.json`;
	const instance = await fetch(query, options);
	const response = await instance.json();
	return response;
};
