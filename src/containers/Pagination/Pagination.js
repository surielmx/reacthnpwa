// @ts-nocheck
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ThemeConsumer } from '../../context/context';
import Skeleton from '../../components/Skeleton';
import { isValidObject } from '../../util/validators';

const Pagination = ({ storyData = {} }) => {
	const paginationStyle = {
		textAlign: 'center',
		margin: '20px auto',
		display: 'table',
	};
	const paginationLinkStyle = {
		padding: '15px',
		fontWeight: 500,
	};
	const paginationSeparatorStyle = {
		padding: '0 10px',
	};

	const { story, page, totalPages } = storyData;

	let currentPage = parseInt(page, 10);
	let nextPage = currentPage !== 1 ? currentPage - 1 : currentPage;
	let prevPage = currentPage !== totalPages ? currentPage + 1 : currentPage;

	if (Number.isNaN(currentPage) || Number.isNaN(nextPage) || Number.isNaN(prevPage)) {
		return <Skeleton variant="text" height="25px" width="25%" center />;
	}

	return (
		<Fragment>
			<ThemeConsumer>
				{({ theme }) => (
					<div style={{ ...paginationStyle }} data-testid="pagination">
						{currentPage !== 1 && (
							<Link
								to={`/${story}/${nextPage}`}
								style={{ ...paginationLinkStyle, color: theme.paginationLink }}
								data-testid="previous"
							>
								&lt; prev
							</Link>
						)}
						<span
							style={{ ...paginationSeparatorStyle, color: theme.paginationNumber }}
						>{`${currentPage}/${totalPages}`}</span>

						{currentPage !== totalPages && (
							<Link
								to={`/${story}/${prevPage}`}
								style={{ ...paginationLinkStyle, color: theme.paginationLink }}
								data-testid="next"
							>
								next &gt;
							</Link>
						)}
					</div>
				)}
			</ThemeConsumer>
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
