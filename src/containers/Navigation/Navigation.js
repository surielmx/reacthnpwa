import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './Navigation.css';

const Navigation = props => {
	return (
		<header>
			<nav className="navigation">
				<ul className="navigation-nav">
					<li>
						<a href="/" aria-label="Home">
							<img
								width="20"
								height="18"
								alt="react logo"
								src="/img/react_logo.png"
							/>
						</a>
					</li>
					<li>
						<NavLink
							to="/news/1"
							activeClassName="active"
							isActive={(match, location) => /news/.test(location.pathname)}
						>
							News
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/newest/1"
							activeClassName="active"
							isActive={(match, location) => /newest/.test(location.pathname)}
						>
							Newest
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/show/1"
							activeClassName="active"
							isActive={(match, location) => /show/.test(location.pathname)}
						>
							Show
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/ask/1"
							activeClassName="active"
							isActive={(match, location) => /ask/.test(location.pathname)}
						>
							Ask
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/jobs/1"
							activeClassName="active"
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

export default withRouter(Navigation);
