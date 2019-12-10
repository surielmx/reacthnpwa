export const isValidObject = obj => {
	return (
		obj &&
		typeof obj === 'object' &&
		obj.constructor === Object &&
		Object.keys(obj).length !== 0
	);
};

export const validatePage = (page, total) => {
	let validPage = !isNaN(page);

	if (validPage && total) {
		return page <= total;
	}
	return validPage;
};

export const validateItem = item => {
	let isValidItem = !isNaN(item);
	let validItem = isValidItem && +item.length === 8;
	return validItem;
};
