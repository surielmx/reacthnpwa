import React from 'react';
import StoryListItem from './StoryListItem';

const StoryList = storyData => {
	const { stories = [], page } = storyData;

	return (
		<ul className="story-container">
			<StoryListItem stories={stories} page={page} />
		</ul>
	);
};

export default StoryList;
