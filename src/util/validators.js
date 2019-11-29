const isValidObject = obj => {
	return (
		obj &&
		typeof obj === 'object' &&
		obj.constructor === Object &&
		Object.keys(obj).length !== 0
	);
};

export default isValidObject;
