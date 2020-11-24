// @ts-nocheck
import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ToggleButton from '../../components/ToggleButton/ToggleButton';

const Navigation = ({ themeMode, isOffLine }) => {
	const navigationStyle = {
		position: 'fixed',
		width: '100%',
		background: 'var(--header)',
	};
	const navigationNav = {
		display: 'flex',
		listStyle: 'none',
		justifyContent: 'space-around',
		alignContent: 'center',
		justifyItems: 'inherit',
		alignItems: 'center',
		flexDirection: 'row',
		maxWidth: '980px',
		margin: '0 auto',
		padding: 0,
	};
	const navigationLink = {
		display: 'flex',
		padding: '11px 7.5px',
		textDecoration: 'none',
		fontWeight: 500,
		color: 'var(--content)',
	};
	const navigationLinkActive = {
		color: 'var(--link)',
		fontWeight: 600,
		borderBottom: '3px solid var(--link)',
	};

	return (
		<header style={navigationStyle}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-around',
					alignItems: 'center',
				}}
			>
				<h3 style={{ color: 'var(--link)' }}>Hacker news</h3>
				<ToggleButton themeMode={themeMode} />
			</div>
			<nav>
				<ul style={navigationNav}>
					<li>
						<NavLink
							id="news-link"
							to="/news/1"
							style={navigationLink}
							activeStyle={navigationLinkActive}
							isActive={(match, location) => /news/.test(location.pathname)}
						>
							News
						</NavLink>
					</li>
					<li>
						<NavLink
							id="newest-link"
							to="/newest/1"
							style={navigationLink}
							activeStyle={navigationLinkActive}
							isActive={(match, location) => /newest/.test(location.pathname)}
						>
							Newest
						</NavLink>
					</li>
					<li>
						<NavLink
							id="show-link"
							to="/show/1"
							style={navigationLink}
							activeStyle={navigationLinkActive}
							isActive={(match, location) => /show/.test(location.pathname)}
						>
							Show
						</NavLink>
					</li>
					<li>
						<NavLink
							id="ask-link"
							to="/ask/1"
							style={navigationLink}
							activeStyle={navigationLinkActive}
							isActive={(match, location) => /ask/.test(location.pathname)}
						>
							Ask
						</NavLink>
					</li>
					<li>
						<NavLink
							id="jobs-link"
							to="/jobs/1"
							style={navigationLink}
							activeStyle={navigationLinkActive}
							isActive={(match, location) => /jobs/.test(location.pathname)}
						>
							Jobs
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};
Navigation.propTypes = {
	currentMode: PropTypes.string,
};

export default withRouter(Navigation);
