import React, { Component, Fragment } from 'react';
import { ThemeConsumer } from '../context/context';
import Pagination from './Pagination/Pagination';
import StoryList from './StoryList';
import { typeStories, getTotalPages } from '../constants/constants';
import { validatePage } from '../util/validators';
import { getStoryPage } from '../api/fetchApi';

class StoryContainer extends Component {
	state = {
		isValidPage: true,
		storyData: {},
	};

	componentDidMount() {
		this.validateStoryType();
	}
	componentDidUpdate(prevProps) {
		const { url } = this.props;
		if (prevProps.url !== url) {
			this.validateStoryType(true);
		}
	}
	validateStoryType = isNewPage => {
		const { path, params } = this.props;
		const { page } = params;
		const [, typeStory] = path.match(/\/([a-z]*)\//, 'g');
		const isValidStory = typeStories.find(story => story === typeStory);
		const isValidPage = validatePage(page);
		if (isNewPage) {
			this.setState({
				storyData: {},
			});
		}
		if (Boolean(isValidStory) && isValidPage) {
			this.setStory(typeStory, page);
			return;
		}
		this.setState({ isValidPage: Boolean(isValidStory) && isValidPage });
	};
	async setStory(story, page) {
		const totalPages = getTotalPages[story];
		const stories = await getStoryPage(story, page);
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
			<ThemeConsumer>
				{({ value }) => (
					<Fragment>
						{!isValidPage && <h1 style={{ margin: '15px' }}>Invalid page</h1>}

						{isValidPage && (
							<Fragment>
								<Pagination {...storyData} />
								<StoryList {...storyData} />
							</Fragment>
						)}
					</Fragment>
				)}
			</ThemeConsumer>
		);
	}
}

export default StoryContainer;
