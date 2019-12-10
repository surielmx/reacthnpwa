import { getStoryPage, getItem, getUser } from '../api/fetchApi';

export const getTotalPages = story => {
	const totalPages = {
		news: 10,
		newest: 12,
		ask: 2,
		show: 2,
		jobs: 1,
	};
	return totalPages[story];
};

export const getStory = async (type, page) => {
	const response = await getStoryPage(type, page);
	const data = await response.json();
	return data;
};

export const getStoryItem = async item => {
	return await getItem(item).then(data => {
		return data;
	});
};

export const getStoryUser = async item => {
	return await getUser(item).then(data => {
		return data;
	});
};
