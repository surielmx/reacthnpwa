import React from 'react';
import PropTypes from 'prop-types';
import { ThemeConsumer } from '../../context/context';
import './ToggleButton.css';

function ToggleButton({ text = '', size = 'default' }) {
	return (
		<>
			<ThemeConsumer>
				{({ checked, onChange }) => (
					<label htmlFor="toggleTheme">
						<span className={`${size} switch-wrapper`}>
							<input
								aria-label="toggleTheme"
								id="toggleTheme"
								name="toggleTheme"
								type="checkbox"
								checked={checked}
								onChange={e => onChange(e.target)}
							/>
							<span className="switch">
								<span className="switch-handle" />
							</span>
						</span>
						<span className="switch-label">{text}</span>
					</label>
				)}
			</ThemeConsumer>
		</>
	);
}
ToggleButton.propTypes = {
	text: PropTypes.string,
	size: PropTypes.string,
};

export default ToggleButton;
