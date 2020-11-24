import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Pagination from './Pagination/Pagination';
import StoryList from './StoryList';
import { typeStories, getTotalPages } from '../constants/constants';
import { validatePage } from '../util/validators';
import { getStoryPage } from '../api/fetchApi';

function StoryContainer({ isOffLine, path, params, url }) {
	const { page } = params;
	const [isValidPage, setValidPage] = useState(true);
	const [storyData, setStoryData] = useState({});

	async function setStory(story, page) {
		const totalPages = getTotalPages[story];
		const stories = await getStoryPage(story, page);
		const storyData = {
			story,
			stories,
			page,
			totalPages,
		};
		setStoryData(storyData);
	}

	useEffect(() => {
		function validateStoryType() {
			if (!isOffLine) {
				const [, typeStory] = path.match(/\/([a-z]*)\//, 'g');
				const isValidStory = typeStories.find((story) => story === typeStory);
				const isValidPage = validatePage(page);
				setStoryData({});
				if (Boolean(isValidStory) && isValidPage) {
					setStory(typeStory, page);
					return;
				}
				setValidPage(Boolean(isValidStory) && isValidPage);
			}
		}
		validateStoryType();
	}, [isOffLine, page, path, url]);

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
StoryContainer.propTypes = {
	props: PropTypes.object,
};

export default StoryContainer;
