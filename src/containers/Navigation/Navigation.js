import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import ToggleButton from '../../components/ToggleButton/ToggleButton';
import { ThemeConsumer } from '../../context/context';

const Navigation = props => {
	const navigationStyle = {
		position: 'fixed',
		width: '100%',
		background: '#1c2938',
		boxShadow: '0 2px 10px 0 rgba(0,0,0,0.15)',
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
		color: '#eeeeee',
	};
	const navigationLinkActive = {
		color: '#61dafb',
	};

	return (
		<ThemeConsumer>
			{({ theme }) => (
				<header style={navigationStyle}>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-around',
							alignItems: 'center',
						}}
					>
						<h3 style={{ color: '#61dafb', margin: '10px 0' }}>Hacker news</h3>
						<ToggleButton />
					</div>
					<nav>
						<ul style={navigationNav}>
							<li>
								<a href="/" aria-label="Home" style={navigationLink}>
									<img height="30" alt="react logo" src="/img/react_logo.svg" />
								</a>
							</li>
							<li>
								<NavLink
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
			)}
		</ThemeConsumer>
	);
};

export default withRouter(Navigation);
