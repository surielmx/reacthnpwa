// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import './ToggleButton.css';

function ToggleButton({ themeMode }) {
	const [whichMode, setWhichMode] = React.useState(themeMode);

	const toggleTheme = ({ checked }) => {
		const theme = checked ? 'dark' : 'light';
		setWhichMode(theme);
		localStorage.setItem('theme', theme);
		if (theme === 'dark') {
			// document.body.classList.remove('light');
			document.body.classList.add('dark');
			return;
		}
		document.body.classList.remove('dark');
		// document.body.classList.add('light');
	};

	return (
		<label htmlFor="toggle-theme">
			<span className="switch-wrapper">
				<input
					aria-label="toggle-theme"
					aria-checked={whichMode === 'dark'}
					id="toggle-theme"
					name="toggleTheme"
					type="checkbox"
					checked={whichMode === 'dark'}
					onChange={(e) => toggleTheme(e.target)}
				/>
				<span className="switch">
					<span className="switch-handle" />
				</span>
			</span>
		</label>
	);
}
ToggleButton.propTypes = {
	currentMode: PropTypes.string,
};

export default ToggleButton;
