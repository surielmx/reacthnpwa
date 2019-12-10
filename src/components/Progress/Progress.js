import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './Progress.css';

const Progress = () => {
	const renderProgress = () => {
		return (
			<Fragment>
				{/* <!Credit: https://dribbble.com/shots/5092176-Newton-Loader> */}
				<div className="gooey">
					<span className="gooey-dot"></span>
					<div className="gooey-dots">
						<span className="gooey-dots-span"></span>
						<span className="gooey-dots-span"></span>
						<span className="gooey-dots-span"></span>
					</div>
				</div>
			</Fragment>
		);
	};
	return ReactDOM.createPortal(renderProgress(), document.getElementById('progress-root'));
};

export default Progress;
