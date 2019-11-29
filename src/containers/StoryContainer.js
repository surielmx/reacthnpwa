import React, { Component, Fragment } from 'react';
import Pagination from './Pagination/Pagination';
import StoryList from './StoryList';
import { typeStories, getTotalPages } from '../constants/constants';
import { validatePage, getStory } from '../Actions/Actions';

class StoryContainer extends Component {
	state = {
		isValidPage: true,
		storyData: {},
	};

	componentDidMount() {
		this.validateStoryType();
	}
	componentDidUpdate(prevProps) {
		const { params } = this.props;
		const { type, page } = params;
		if (prevProps.params.page !== page || prevProps.params.type !== type) {
			console.log(prevProps);
			console.log(this.props);
			console.log(prevProps !== this.props);
			this.validateStoryType(true);
		}
	}
	validateStoryType = isNewPage => {
		const { params } = this.props;
		const { type, page } = params;
		const isValidStory = typeStories.find(story => story === type);
		const isValidPage = validatePage(page);
		if (isNewPage) {
			this.setState({
				storyData: {},
			});
		}
		if (Boolean(isValidStory) && isValidPage) {
			this.setStory(type, page);
			return;
		}
		this.setState({ isValidPage: Boolean(isValidStory) && isValidPage });
	};
	async setStory(story, page) {
		const totalPages = getTotalPages[story];
		const stories = await getStory(story, page);
		const storyData = {
			story,
			stories,
			page,
			totalPages,
		};
		this.setState({ storyData });
	}

	render() {
		const { isValidPage, storyData } = this.state;
		return (
			<Fragment>
				{!isValidPage && <h1 style={{ margin: '15px' }}>Invalid page</h1>}

				{isValidPage && (
					<Fragment>
						<Pagination {...storyData} />
						<StoryList {...storyData} />
					</Fragment>
				)}
			</Fragment>
		);
	}
}

export default StoryContainer;
