import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from '../../components/Skeleton';
import './Pagination.css';
import { isValidObject } from '../../util/validators';

const renderLoader = () => <Skeleton variant="text" height="25px" width="25%" center />;

const Pagination = storyData => {
	if (!isValidObject(storyData)) {
		return renderLoader();
	}
	const { story, page, totalPages } = storyData;

	let currentPage = parseInt(page, 10);
	let nextPage = currentPage !== 1 ? currentPage - 1 : currentPage;
	let prevPage = currentPage !== totalPages ? currentPage + 1 : currentPage;

	return (
		<Fragment>
			<div className="pagination">
				{currentPage !== 1 && (
					<Link to={`/${story}/${nextPage}`} className="pagination-action">
						&lt; prev
					</Link>
				)}
				<span>{`${currentPage}/${totalPages}`}</span>

				{currentPage !== totalPages && (
					<Link to={`/${story}/${prevPage}`} className="pagination-action">
						next &gt;
					</Link>
				)}
			</div>
		</Fragment>
	);
};

export default Pagination;
