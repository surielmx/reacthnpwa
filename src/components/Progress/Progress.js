import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { ThemeConsumer } from '../../context/context';

const Progress = () => {
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
	const renderProgress = () => {
		return (
			<ThemeConsumer>
				{({ theme }) => (
					<Fragment>
						{/* <!Credit: https://dribbble.com/shots/5092176-Newton-Loader> */}
						<div style={gooeyStyle}>
							<span style={{ ...gooeyDot, background: theme.title }}></span>
							<div style={gooeyDots}>
								<span style={{ ...gooeySpan, background: theme.title }}></span>
								<span style={{ ...gooeySpan, background: theme.title }}></span>
								<span style={{ ...gooeySpan, background: theme.title }}></span>
							</div>
						</div>
					</Fragment>
				)}
			</ThemeConsumer>
		);
	};
	return ReactDOM.createPortal(renderProgress(), document.getElementById('progress-root'));
};

export default Progress;
