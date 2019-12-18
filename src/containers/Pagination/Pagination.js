import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ThemeConsumer } from '../../context/context';
import Skeleton from '../../components/Skeleton';
import { isValidObject } from '../../util/validators';

const renderLoader = () => <Skeleton variant="text" height="25px" width="25%" center />;

const Pagination = storyData => {
	if (!isValidObject(storyData)) {
		return renderLoader();
	}
	const paginationStyle = {
		textAlign: 'center',
		margin: '20px auto',
		display: 'table',
	};
	const paginationLinkStyle = {
		padding: '15px',
		color: '#4da3bb',
		fontWeight: 500,
	};
	const paginationSeparatorStyle = {
		padding: '0 10px',
	};

	const { story, page, totalPages } = storyData;

	let currentPage = parseInt(page, 10);
	let nextPage = currentPage !== 1 ? currentPage - 1 : currentPage;
	let prevPage = currentPage !== totalPages ? currentPage + 1 : currentPage;

	return (
		<Fragment>
			<ThemeConsumer>
				{({ theme }) => (
					<div style={{ ...paginationStyle }}>
						{currentPage !== 1 && (
							<Link to={`/${story}/${nextPage}`} style={{ ...paginationLinkStyle }}>
								&lt; prev
							</Link>
						)}
						<span
							style={{ ...paginationSeparatorStyle }}
						>{`${currentPage}/${totalPages}`}</span>

						{currentPage !== totalPages && (
							<Link to={`/${story}/${prevPage}`} style={{ ...paginationLinkStyle }}>
								next &gt;
							</Link>
						)}
					</div>
				)}
			</ThemeConsumer>
		</Fragment>
	);
};

export default Pagination;
