import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Progress = () => {
	let progressRoot = document.getElementById('progress-root');
	if (!progressRoot) {
		progressRoot = document.createElement('div');
		progressRoot.setAttribute('id', 'progress-root');
		document.body.appendChild(progressRoot);
	}
	const gooeyStyle = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		width: '142px',
		height: '40px',
		margin: '-20px 0 0 -71px',
	};
	const gooeyDot = {
		position: 'absolute',
		width: '16px',
		height: '16px',
		top: '12px',
		left: '15px',
		borderRadius: '50%',
		transform: 'translateX(0)',
		animation: 'dot 2.8s infinite',
	};
	const gooeyDots = {
		transform: 'translateX(0)',
		marginTop: '12px',
		marginLeft: '31px',
		animation: 'dots 2.8s infinite',
	};
	const gooeySpan = {
		display: 'block',
		float: 'left',
		width: '16px',
		height: '16px',
		marginLeft: '16px',
		borderRadius: '50%',
	};

	return ReactDOM.createPortal(
		<Fragment>
			{/* <!Credit: https://dribbble.com/shots/5092176-Newton-Loader> */}
			<div style={gooeyStyle}>
				<span style={{ ...gooeyDot }}></span>
				<div style={gooeyDots}>
					<span style={{ ...gooeySpan }}></span>
					<span style={{ ...gooeySpan }}></span>
					<span style={{ ...gooeySpan }}></span>
				</div>
			</div>
		</Fragment>,
		progressRoot
	);
};

export default Progress;
