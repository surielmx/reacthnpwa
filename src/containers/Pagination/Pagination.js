// @ts-nocheck
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Skeleton from '../../components/Skeleton';
import { isValidObject } from '../../util/validators';

const renderLoader = () => <Skeleton variant="text" height="25px" width="25%" center />;

const Pagination = (storyData) => {
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
		fontWeight: 500,
		color: 'var(--link)',
	};
	const paginationSeparatorStyle = {
		padding: '0 10px',
		color: 'var(--title)',
	};

	const { story, page, totalPages } = storyData;

	let currentPage = parseInt(page, 10);
	let nextPage = currentPage !== 1 ? currentPage - 1 : currentPage;
	let prevPage = currentPage !== totalPages ? currentPage + 1 : currentPage;

	return (
		<Fragment>
			<div style={{ ...paginationStyle }}>
				{currentPage !== 1 && (
					<Link
						id="previous-page"
						to={`/${story}/${nextPage}`}
						style={paginationLinkStyle}
					>
						&lt; prev
					</Link>
				)}
				<span style={paginationSeparatorStyle}>{`${currentPage}/${totalPages}`}</span>

				{currentPage !== totalPages && (
					<Link id="next-page" to={`/${story}/${prevPage}`} style={paginationLinkStyle}>
						next &gt;
					</Link>
				)}
			</div>
		</Fragment>
	);
};
Pagination.propTypes = {
	storyData: PropTypes.shape({
		story: PropTypes.string,
		page: PropTypes.string,
		totalPages: PropTypes.number,
	}),
};

export default Pagination;
