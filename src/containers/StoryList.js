import React from 'react';
import StoryListItem from './StoryListItem';

const StoryList = storyData => {
	const { stories = [], page } = storyData;
	const storyContainer = {
		padding: '0 15px',
	};

	return (
		<ul style={storyContainer}>
			<StoryListItem stories={stories} page={page} />
		</ul>
	);
};

export default StoryList;
