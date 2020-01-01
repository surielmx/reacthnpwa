import React from 'react';
import { ThemeConsumer } from '../../context/context';
import './ToggleButton.css';

function ToggleButton(props) {
	const { text, size = 'default', disabled } = props;
	return (
		<>
			<ThemeConsumer>
				{({ theme, checked = false, onChange }) => (
					<label htmlFor="checkbox">
						<span className={`${size} switch-wrapper`}>
							<input
								id="checkbox"
								type="checkbox"
								checked={checked}
								disabled={disabled}
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

export default ToggleButton;
