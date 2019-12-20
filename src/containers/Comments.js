import React, { Fragment } from 'react';
import { ThemeConsumer } from '../context/context';
import Skeleton from '../components/Skeleton';

function CommentList(props) {
	const { node, children } = props;

	const nodes =
		children &&
		children.map(childnode => {
			return (
				<CommentList key={childnode.id} node={childnode} children={childnode.comments} />
			);
		});
	return (
		<ThemeConsumer>
			{({ theme }) => (
				<Fragment>
					<li key={node.id}>
						<div style={{ color: theme.title }}>
							by
							<span style={{ color: theme.link }}>
								<a href={`/user/${node.user}`} style={{ color: theme.link }}>
									{` ${node.user}`}
								</a>
							</span>
							| {node.time_ago}
						</div>
						<div
							style={{ wordWrap: 'break-word', color: theme.title }}
							dangerouslySetInnerHTML={{ __html: node.content }}
						/>
						{nodes && <ul style={{ paddingLeft: '15px' }}>{nodes}</ul>}
					</li>
				</Fragment>
			)}
		</ThemeConsumer>
	);
}

const Comments = props => {
	const { comments } = props;
	const { comments: commentsArray } = comments;

	const nodes =
		(commentsArray &&
			commentsArray.map(item => {
				return <CommentList key={item.id} node={item} children={item.comments} />;
			})) ||
		[];
	return (
		<ThemeConsumer>
			{({ theme }) => (
				<Fragment>
					{nodes.length !== 0 ? (
						<Fragment>
							<div style={{ padding: '0 15px' }}>
								<div style={{ color: theme.title, marginTop: '38px' }}>
									<span className="story-title_link">
										{comments.title}
										<small>
											{comments.domain && `(${comments.domain || ''})`}
										</small>
									</span>
									<div className="story_details">
										<span className="story-details_points">
											{comments.points && `${comments.points} points | by `}
											<span className="story-details_user">
												{comments.user && `${comments.user} | `}
											</span>
											{comments.time_ago}
										</span>
									</div>
								</div>
								<ul style={{ paddingLeft: '15px' }}>{nodes}</ul>
							</div>
						</Fragment>
					) : (
						Array.from(new Array(12)).map((node, index) => (
							<Fragment key={`skeleton-${index}`}>
								<Skeleton
									variant="text"
									className="story"
									height="10px"
									width="25%"
								/>
								<Skeleton
									variant="text"
									className="story"
									height="8px"
									width="30%"
								/>
								<Skeleton variant="text" className="story" />
							</Fragment>
						))
					)}
				</Fragment>
			)}
		</ThemeConsumer>
	);
};
export default Comments;
