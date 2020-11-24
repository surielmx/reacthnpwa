import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Comments from './Comments';
import { getStoryItem } from '../api/fetchApi';
import { validateItem, isValidObject } from '../util/validators';

function ItemContainer(props = {}) {
	const { params } = props;
	const [isValidItem, setValidItem] = useState(true);
	const [hasComments, setHasComments] = useState(true);
	const [comments, setComments] = useState([]);

	useEffect(() => {
		const isValidItem = validateItem(params.item);
		if (!isValidItem) {
			setValidItem(isValidItem);
			setHasComments(isValidItem);
			return;
		}
		async function getComments(item = 0) {
			const hasComments = await getStoryItem(item);
			const { comments = [] } = hasComments;
			setValidItem(isValidObject(hasComments));
			setHasComments(comments.length !== 0);
			setComments(comments);
		}
		getComments(params.item);
	}, [params.item]);

	return (
		<Fragment>
			{isValidItem && hasComments && (
				<div style={{ margin: '15px 0' }}>
					<Comments comments={comments} />
				</div>
			)}
			{!isValidItem && <h1 style={{ margin: '15px' }}>Invalid comment</h1>}
			{isValidItem && !hasComments && <h1 style={{ margin: '15px' }}>No comments</h1>}
		</Fragment>
	);
}
ItemContainer.propTypes = {
	props: PropTypes.object,
};

export default ItemContainer;
