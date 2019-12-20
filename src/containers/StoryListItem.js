import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ThemeConsumer } from '../context/context';
import Skeleton from '../components/Skeleton';

const StoryListItem = props => {
	const { stories, page } = props;

	const storyStyle = {
		marginBottom: '20px',
		display: 'flex',
		alignItems: 'baseline',
	};
	const storyNumberStyle = {
		marginRight: '15px',
	};
	const storyTitle = {
		display: 'block',
		fontSize: '1.25rem',
		marginBottom: '10px',
	};
	const storyDetail = {
		fontSize: '0.875rem',
	};
	const storyLink = {
		fontSize: '0.875rem',
	};

	return (
		<ThemeConsumer>
			{({ theme }) => (
				<Fragment>
					{(stories.length === 0 ? Array.from(new Array(12)) : stories).map(
						(story, index) => {
							let currentPage = parseInt(page, 10);
							let storyNumber =
								currentPage !== 1 ? currentPage * 30 - 30 + index + 1 : index + 1;

							return (
								<Fragment key={(story && story.id) || index}>
									{story ? (
										<li style={storyStyle} key={story.id}>
											<span
												style={{ ...storyNumberStyle, color: theme.title }}
											>
												{storyNumber}
											</span>
											<div style={storyDetail}>
												<a
													href={story.url}
													aria-label="Story url"
													style={{ ...storyTitle, color: theme.title }}
												>
													{story.title}
												</a>
												<div className="story-details">
													<span
														style={{ color: theme.link }}
													>{`${story.points || 0} points`}</span>
													{story.user && <span> | by </span>}
													{story.user && (
														<Link
															style={{
																...storyLink,
																color: theme.title,
															}}
															aria-label="Story author"
															to={`/user/${story.user}`}
														>
															{story.user}
														</Link>
													)}
													<span style={{ color: theme.link }}>
														{` | ${story.time_ago} | `}
													</span>
													<Link
														style={{ ...storyLink, color: theme.title }}
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
						}
					)}
				</Fragment>
			)}
		</ThemeConsumer>
	);
};
export default StoryListItem;
