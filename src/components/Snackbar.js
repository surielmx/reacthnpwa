import React from 'react';
import PropTypes from 'prop-types';

const Snackbar = ({ showStatus = false }) => {
	const status = (showStatus && { display: 'flex' }) || { display: 'none' };
	return (
		<div className="snackbar" style={status}>
			<p className="snackbar-content">SnackBar</p>
		</div>
	);
};

Snackbar.propTypes = {
	showStatus: PropTypes.bool,
};

export default Snackbar;
