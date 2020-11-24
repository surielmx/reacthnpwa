import React from 'react';
import PropTypes from 'prop-types';

const Snackbar = ({ showStatus = false }) => {
	const status = (showStatus && { display: 'flex' }) || { display: 'none' };
	return (
		<div className="snackbar" style={status} id="sbackbar">
			<img src="../img/wifi_status.svg" className="snackbat-img" alt="Wifi status" />
			<p className="snackbar-content">You are offline. Please check your network status.</p>
		</div>
	);
};

Snackbar.propTypes = {
	showStatus: PropTypes.bool,
};

export default Snackbar;
