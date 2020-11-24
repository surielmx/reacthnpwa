import React, { Fragment, memo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Skeleton from '../components/Skeleton';

const StoryList = ({ stories = [], page = '1' }) => {
	const storyStyle = {
		marginBottom: 20,
		display: 'flex',
		alignItems: 'baseline',
	};
	const storyNumberStyle = {
		marginRight: 15,
		color: 'var(--title)',
	};
	const storyTitle = {
		display: 'block',
		fontSize: '1.25rem',
		marginBottom: 5,
		color: 'var(--title)',
		textDecoration: 'none',
	};
	const storyDetail = {
		fontSize: '0.875rem',
	};
	const storyLink = {
		fontSize: '0.875rem',
		fontWeight: 600,
	};
	const storyContent = {
		color: 'var(--content)',
	};

	return (
		<Fragment>
			<ul
				style={{
					padding: '0 15px',
				}}
			>
				{(stories.length === 0 ? Array.from(new Array(8)) : stories).map((story, index) => {
					let currentPage = parseInt(page, 10);
					let storyNumber =
						currentPage !== 1 ? currentPage * 30 - 30 + index + 1 : index + 1;

					return (
						<Fragment key={(story && story.id) || index}>
							{story ? (
								<li style={storyStyle} key={story.id}>
									<span style={storyNumberStyle}>{storyNumber}</span>
									<div style={storyDetail}>
										<a
											href={story.url}
											aria-label="Story url"
											style={storyTitle}
										>
											{story.title}
										</a>
										<div className="story-details">
											<span style={storyContent}>{`${
												story.points || 0
											} points`}</span>
											{story.user && <span style={storyContent}> | by </span>}
											{story.user && (
												<Link
													style={{
														...storyLink,
														color: 'var(--link)',
													}}
													aria-label="Story author"
													to={`/user/${story.user}`}
												>
													{story.user}
												</Link>
											)}
											<span
												style={storyContent}
											>{` | ${story.time_ago} | `}</span>
											<Link
												style={{
													...storyLink,
													color: 'var(--link)',
												}}
												aria-label="Story comments"
												to={`/item/${story.id}`}
											>
												{story.comments_count} comments
											</Link>
										</div>
									</div>
								</li>
							) : (
								<Fragment>
									<Skeleton variant="text" className="story" />
									<Skeleton
										variant="text"
										className="story"
										height="8px"
										width="75%"
									/>
								</Fragment>
							)}
						</Fragment>
					);
				})}
			</ul>
		</Fragment>
	);
};
StoryList.propTypes = {
	stories: PropTypes.array,
	page: PropTypes.string,
};

export default memo(StoryList);
