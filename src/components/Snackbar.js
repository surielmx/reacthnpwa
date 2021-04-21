import React from 'react';
import PropTypes from 'prop-types';
import logo from '../logo.svg';

const Snackbar = ({ showStatus = true }) => {
	const status = (showStatus && { display: 'flex' }) || { display: 'none' };
	return (
		<div className="snackbar" style={status} id="snackbar">
			<img
				src="/assets/wifi_status.svg"
				className="snackbar-img"
				alt="Wifi status"
				width="24"
			/>
			<p className="snackbar-content">You are offline. Please check your network status.</p>
		</div>
	);
};

Snackbar.propTypes = {
	showStatus: PropTypes.bool,
};

export default Snackbar;
