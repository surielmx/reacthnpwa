// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeConsumer } from '../../context/context';
import './ToggleButton.css';

function ToggleButton() {
	return (
		<ThemeConsumer>
			{({ checked, onChange }) => (
				<label htmlFor="toggle-theme">
					<span className="switch-wrapper">
						<input
							role="switch"
							aria-label="toggle-theme"
							aria-checked={checked}
							id="toggle-theme"
							name="toggleTheme"
							type="checkbox"
							checked={checked}
							onChange={e => onChange(e.target)}
						/>
						<span className="switch">
							<span className="switch-handle" />
						</span>
					</span>
				</label>
			)}
		</ThemeConsumer>
	);
}
ToggleButton.propTypes = {
	text: PropTypes.string,
	size: PropTypes.string,
};

export default ToggleButton;
