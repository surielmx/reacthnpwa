// @ts-nocheck
import React, { Fragment, Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Skeleton from './components/Skeleton';
import Progress from './components/Progress/Progress';
import Snackbar from './components/Snackbar';

const Navigation = lazy(() => import('./containers/Navigation/Navigation'));
const StoryContainer = lazy(() => import('./containers/StoryContainer'));
const ItemContainer = lazy(() => import('./containers/ItemContainer'));
const UserContainer = lazy(() => import('./containers/UserContainer'));

const renderLoader = () => <Skeleton height="38px"></Skeleton>;

function App() {
	const [themeMode, setThemeMode] = React.useState('');
	const [isOffLine, setIsOffLine] = React.useState(false);

	React.useEffect(() => {
		const currentTheme = localStorage.getItem('theme');
		const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
		const currentMode = prefersDarkScheme.matches ? 'dark' : 'light';

		if (!currentTheme) {
			localStorage.setItem('theme', currentMode);
		}

		setThemeMode(currentTheme || currentMode);
		document.body.classList.add(currentTheme || currentMode);
		window.addEventListener('online', handleStatusNavigation);
		window.addEventListener('offline', handleStatusNavigation);
		return () => {
			window.removeEventListener('online', handleStatusNavigation);
			window.removeEventListener('offline', handleStatusNavigation);
		};
	}, []);

	const handleStatusNavigation = ({ type }) => setIsOffLine(type !== 'online');

	return (
		<Fragment>
			<Suspense fallback={renderLoader()}>
				<Navigation {...{ themeMode, isOffLine }} />
			</Suspense>
			<main className="container">
				<Suspense fallback={<Progress />}>
					<Switch>
						<Route
							path={[
								'/news/:page?',
								'/newest/:page?',
								'/show/:page?',
								'/ask/:page?',
								'/jobs/:page?',
							]}
							render={({ match, history }) => (
								<StoryContainer isOffLine={isOffLine} {...match} {...history} />
							)}
						/>

						<Route
							path="/item/:item"
							render={({ match, history }) => (
								<ItemContainer isOffLine={isOffLine} {...match} {...history} />
							)}
						/>
						<Route
							path="/user/:user?"
							render={({ match, history }) => (
								<UserContainer isOffLine={isOffLine} {...match} {...history} />
							)}
						/>
						<Route
							path="*"
							render={() => {
								return <Redirect to="/news/1" />;
							}}
						/>
					</Switch>
				</Suspense>
			</main>
			<ToastContainer />
			<Snackbar showStatus={isOffLine} />
		</Fragment>
	);
}

export default App;
