import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Skeleton from '../components/Skeleton';

function CommentList({ node, children, theme = {} }) {
	const nodes =
		children.length !== 0 &&
		children.map((childnode) => {
			return (
				<CommentList
					key={childnode.id}
					node={childnode}
					children={childnode.comments}
					theme={theme}
				/>
			);
		});
	return (
		<Fragment>
			<li key={node.id} style={{ color: 'var(--title)' }}>
				<div style={{ color: 'var(--title)', fontWeight: 600 }}>
					by
					<span style={{ color: 'var(--link)' }}>
						<a href={`/user/${node.user}`}>{` ${node.user}`}</a>
					</span>
					| {node.time_ago}
				</div>
				<div
					style={{ wordWrap: 'break-word' }}
					dangerouslySetInnerHTML={{ __html: node.content }}
				/>
				{nodes && <ul style={{ paddingLeft: '15px' }}>{nodes}</ul>}
			</li>
		</Fragment>
	);
}

const Comments = ({ comments, theme }) => {
	const nodes =
		(comments &&
			comments.map((item) => {
				return (
					<CommentList key={item.id} node={item} children={item.comments} theme={theme} />
				);
			})) ||
		[];
	return (
		<div style={{ padding: '0 15px' }}>
			{nodes.length !== 0 ? (
				<Fragment>
					<div style={{ marginTop: '38px' }}>
						<span>
							{comments.title}
							<small>{comments.domain && `(${comments.domain || ''})`}</small>
						</span>
						<div>
							<span>
								{comments.points && `${comments.points} points | by `}
								<span>{comments.user && `${comments.user} | `}</span>
								{comments.time_ago}
							</span>
						</div>
					</div>
					<ul>{nodes}</ul>
				</Fragment>
			) : (
				Array.from(new Array(12)).map((node, index) => (
					<Fragment key={`skeleton-${index}`}>
						<Skeleton variant="text" className="story" height="10px" width="25%" />
						<Skeleton variant="text" className="story" height="8px" width="30%" />
						<Skeleton variant="text" className="story" />
					</Fragment>
				))
			)}
		</div>
	);
};
Comments.propTypes = {
	comments: PropTypes.array,
	theme: PropTypes.object,
};

export default Comments;
