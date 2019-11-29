import React, { Component } from 'react';
import Comments from './Comments';
// import Pagination from "./Pagination/Pagination";
// import StoryList from "./StoryList";
import { validateItem, getStoryItem } from '../Actions/Actions';
// import { getStoryType, getItem } from '../services/Services';

class ItemContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isValidItem: true,
			comments: {},
		};
	}

	componentWillMount() {
		const { match } = this.props;
		const { params } = match;
		const { isValidItem } = this.state;

		if (!isValidItem) {
			return;
		}
		this.setState({
			isValidItem: validateItem(params.item),
		});
	}

	componentDidMount() {
		const { match } = this.props;
		const { params } = match;
		const { isValidItem } = this.state;

		if (!isValidItem) {
			return;
		}
		this.getItem(params.item);
	}

	getItem(item) {
		this.setState({
			comments: {},
		});
		getStoryItem(item).then(comments => {
			this.setState({ comments });
		});
	}

	render() {
		const { isValidItem, comments } = this.state;
		return (
			<React.Fragment>
				{(isValidItem && <Comments comments={comments} />) || (
					<h1 style={{ margin: '15px' }}>Invalid ITem</h1>
				)}
			</React.Fragment>
		);
	}
}

export default ItemContainer;
