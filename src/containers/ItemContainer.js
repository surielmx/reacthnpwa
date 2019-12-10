import React, { Component, Fragment } from 'react';
import Comments from './Comments';
import { getStoryItem } from '../api/fetchApi';
import { validateItem, isValidObject } from '../util/validators';

class ItemContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isValidItem: true,
			comments: {},
		};
	}

	componentDidMount() {
		const { params } = this.props;
		const isValidItem = validateItem(params.item);

		if (!isValidItem) {
			return;
		}
		this.getComments(params.item);
	}

	async getComments(item) {
		const comments = await getStoryItem(item);
		const validObject = isValidObject(comments);
		if (!Boolean(validObject)) {
			return {};
		}
		this.setState({ comments });
	}

	render() {
		const { isValidItem, comments } = this.state;
		return (
			<Fragment>
				{(isValidItem && <Comments comments={comments} />) || (
					<h1 style={{ margin: '15px' }}>Invalid ITem</h1>
				)}
			</Fragment>
		);
	}
}

export default ItemContainer;
