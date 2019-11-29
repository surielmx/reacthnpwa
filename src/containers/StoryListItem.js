import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from '../components/Skeleton';

const StoryListItem = props => {
	const { stories, page } = props;

	return (
		<Fragment>
			{(stories.length === 0 ? Array.from(new Array(12)) : stories).map((story, index) => {
				let currentPage = parseInt(page, 10);
				let storyNumber = currentPage !== 1 ? currentPage * 30 - 30 + index + 1 : index + 1;

				return (
					<Fragment key={(story && story.id) || index}>
						{story ? (
							<li className="story" key={story.id}>
								<span className="story_number">{storyNumber}</span>
								<div className="story_title">
									<a
										href={story.url}
										aria-label="Story url"
										className="story-title_link"
									>
										{story.title}
									</a>
									<div className="story_details">
										<span className="story-details_points">
											{`${story.points} points | by `}
											<a
												className="story-details_user"
												aria-label="Story user"
												href={`/user/${story.user}`}
											>
												{story.user}
											</a>
											{` | ${story.time_ago} | `}
											<Link
												className="story-details_comments"
												to={`/item/${story.id}`}
											>
												{story.comments_count} comments
											</Link>
										</span>
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
		</Fragment>
	);
};
export default StoryListItem;
