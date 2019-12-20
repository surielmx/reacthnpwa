import React, { Component, Fragment } from 'react';
import { ThemeConsumer } from '../context/context';
import Skeleton from '../components/Skeleton';
import { isValidObject } from '../util/validators';
import { getStoryUser } from '../api/fetchApi';

class UserContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null,
		};
	}

	componentDidMount() {
		const {
			params: { user },
		} = this.props;
		this.setUser(user);
	}

	async setUser(userId) {
		const user = await getStoryUser(userId);
		const existUser = isValidObject(user);

		if (!Boolean(existUser)) {
			return {};
		}
		this.setState({ user });
	}

	render() {
		const { user } = this.state;

		return (
			<ThemeConsumer>
				{({ theme }) =>
					(user && (
						<Fragment>
							<div style={{ margin: '30px 15px' }}>
								<p style={{ color: theme.title }}>
									<span>
										<strong>${user.id}</strong>
										{` joined ${user.created}`}
									</span>
								</p>
								<p>{user.about}</p>
							</div>
						</Fragment>
					)) || (
						<div style={{ margin: '30px 15px' }}>
							<Skeleton variant="text" className="story" height="10px" width="45%" />
							<Skeleton variant="text" className="story" />
						</div>
					)
				}
			</ThemeConsumer>
		);
	}
}

export default UserContainer;
