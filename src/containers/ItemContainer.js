import React, { Fragment, useState, useEffect } from 'react';
import { ThemeConsumer } from '../context/context';
import Comments from './Comments';
import { getStoryItem } from '../api/fetchApi';
import { validateItem, isValidObject } from '../util/validators';

function ItemContainer(props) {
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
		async function getComments(item) {
			const hasComments = await getStoryItem(item);
			const { comments = [] } = hasComments;
			setValidItem(isValidObject(hasComments));
			setHasComments(comments.length !== 0);
			setComments(comments);
		}
		getComments(params.item);
	}, [params.item]);

	return (
		<ThemeConsumer>
			{({ theme }) => (
				<Fragment>
					{isValidItem && hasComments && (
						<div style={{ margin: '15px 0' }}>
							<Comments comments={comments} theme={theme} />
						</div>
					)}
					{!isValidItem && (
						<h1 style={{ margin: '15px', color: theme.title }}>Invalid comment</h1>
					)}
					{isValidItem && !hasComments && (
						<h1 style={{ margin: '15px', color: theme.title }}>No comments</h1>
					)}
				</Fragment>
			)}
		</ThemeConsumer>
	);
}

export default ItemContainer;
