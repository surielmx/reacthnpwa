import React, { Component, Fragment, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Skeleton from './components/Skeleton.js';
import Snackbar from './components/Snackbar.js';
import Progress from './components/Progress/Progress.js';

const Navigation = lazy(() => import('./containers/Navigation/Navigation'));
const StoryContainer = lazy(() => import('./containers/StoryContainer'));
const ItemContainer = lazy(() => import('./containers/ItemContainer'));
const UserContainer = lazy(() => import('./containers/UserContainer'));

const renderLoader = () => <Skeleton height="38px"></Skeleton>;

class App extends Component {
	state = {
		showStatus: false,
	};
	componentDidMount() {
		window.addEventListener('online', this.handleStatusNavigation);
		window.addEventListener('offline', this.handleStatusNavigation);
	}
	componentWillUnmount() {
		window.removeEventListener('online', this.handleStatusNavigation);
		window.removeEventListener('offline', this.handleStatusNavigation);
	}
	handleStatusNavigation = e => {
		e.preventDefault();
		this.setState(prevState => {
			return { showStatus: !prevState.showStatus };
		});
	};

	render() {
		return (
			<Fragment>
				<Router>
					<Fragment>
						<Suspense fallback={renderLoader()}>
							<Navigation />
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
											'/job/:page?',
										]}
										render={({ match, history }) => (
											<StoryContainer {...match} {...history} />
										)}
									/>

									<Route
										path="/item/:item"
										render={({ match, history }) => (
											<ItemContainer {...match} {...history} />
										)}
									/>
									<Route
										path="/user/:user?"
										render={({ match, history }) => (
											<UserContainer {...match} {...history} />
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
					</Fragment>
				</Router>
				<Snackbar showStatus={this.state.showStatus} />
			</Fragment>
		);
	}
}

export default App;
