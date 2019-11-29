import React from 'react';

const Snackbar = ({ showStatus = false }) => {
	const status = (showStatus && { display: 'flex' }) || { display: 'none' };
	return (
		<div className="snackbar" style={status}>
			<p className="snackbar-content">SnackBar</p>
		</div>
	);
};

export default Snackbar;
