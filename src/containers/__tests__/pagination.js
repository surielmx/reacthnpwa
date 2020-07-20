// @ts-nocheck
import '@testing-library/jest-dom/extend-expect';
import 'jest-axe/extend-expect';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import { queryByTestId } from '@testing-library/dom';
import { ThemeProvider, ThemeConsumer } from '../../context/context';
import Pagination from '../Pagination/Pagination';
// import { getStoryPage } from '../../api/fetchApi';

beforeEach(cleanup);

jest.mock('../../api/fetchApi.js');

const mockFirstPage = {
	story: 'news',
	stories: [
		{ comments_count: 0, domain: 'filmthreat.com', id: 2 },
		{ comments_count: 508, domain: 'retool.com', id: 224 },
		{ comments_count: 2, domain: 'popupcity.net', id: 2 },
	],
	page: '1',
	totalPages: 10,
};
const mockMiddlePage = {
	story: 'news',
	stories: [
		{ comments_count: 0, domain: 'filmthreat.com', id: 2 },
		{ comments_count: 508, domain: 'retool.com', id: 224 },
		{ comments_count: 2, domain: 'popupcity.net', id: 2 },
	],
	page: '5',
	totalPages: 10,
};
const mockLastPage = {
	story: 'news',
	stories: [
		{ comments_count: 0, domain: 'filmthreat.com', id: 2 },
		{ comments_count: 508, domain: 'retool.com', id: 224 },
		{ comments_count: 2, domain: 'popupcity.net', id: 2 },
	],
	page: '10',
	totalPages: 10,
};
const mockNoStoryData = {};
const theme = {
	light: {
		background: '#ffffff',
		title: '#263238',
		paginationNumber: '#3c4043',
		paginationLink: '#1c2938',
		link: '#5a5a5b',
		linkActive: '#3c4043',
		skeleton: '#efefef',
	},
	dark: {
		background: '#0d1219',
		title: '#afafaf',
		paginationNumber: '#eeeeee',
		paginationLink: '#61dafb',
		link: '#5a5a5b',
		linkActive: '#61dafb',
		skeleton: '#313131',
	},
};

describe('Pagination', () => {
	test('Render component', function() {
		render(
			<MemoryRouter>
				<Pagination />
			</MemoryRouter>
		);
	});
	test('Loading Skeleton', async function() {
		const { getByTestId } = render(
			<ThemeProvider theme={theme.light} checked={false}>
				<ThemeConsumer>
					{() => (
						<MemoryRouter>
							<Pagination storyData={mockNoStoryData} />
						</MemoryRouter>
					)}
				</ThemeConsumer>
			</ThemeProvider>
		);
		const skeleton = getByTestId('skeleton');
		expect(skeleton).toBeInTheDocument();
	});
	test('Render first page', async function() {
		// getStoryPage.mockResolvedValueOnce(mockFirstPage);
		// expect(getStoryPage).toHaveBeenCalledWith(mockFirstPage);
		// expect(getStoryPage).toHaveBeenCalledTimes(1);
		const { container, getByTestId } = render(
			<ThemeProvider theme={theme.light} checked={false}>
				<ThemeConsumer>
					{() => (
						<MemoryRouter>
							<Pagination storyData={mockFirstPage} />
						</MemoryRouter>
					)}
				</ThemeConsumer>
			</ThemeProvider>
		);
		const pagination = getByTestId('pagination');
		const paginationNext = getByTestId('next');
		// const paginationPrev = getByTestId('previous');

		expect(pagination).toBeInTheDocument();
		expect(queryByTestId(container, 'next')).toBeInTheDocument();
		expect(queryByTestId(container, 'previous')).not.toBeInTheDocument();
		// expect(paginationNext.textContent).toBe('next >');
		//expect(paginationPrev).toBeFalsy();
	});
	test('Render random middle page', async function() {
		const { container, getByTestId } = render(
			<ThemeProvider theme={theme.light} checked={false}>
				<ThemeConsumer>
					{() => (
						<MemoryRouter>
							<Pagination storyData={mockMiddlePage} />
						</MemoryRouter>
					)}
				</ThemeConsumer>
			</ThemeProvider>
		);
		const pagination = getByTestId('pagination');
		const paginationNext = getByTestId('next');
		const paginationPrev = getByTestId('previous');

		expect(pagination).toBeInTheDocument();
		expect(queryByTestId(container, 'next')).toBeInTheDocument();
		expect(queryByTestId(container, 'previous')).toBeInTheDocument();
		expect(paginationNext.textContent).toBe('next >');
		expect(paginationPrev.textContent).toBe('< prev');
		//expect(paginationPrev).toBeFalsy();
	});
	test('Render last page', async function() {
		const { container, getByTestId } = render(
			<ThemeProvider theme={theme.light} checked={false}>
				<ThemeConsumer>
					{() => (
						<MemoryRouter>
							<Pagination storyData={mockLastPage} />
						</MemoryRouter>
					)}
				</ThemeConsumer>
			</ThemeProvider>
		);
		const pagination = getByTestId('pagination');
		// const paginationNext = getByTestId('next');
		const paginationPrev = getByTestId('previous');

		expect(pagination).toBeInTheDocument();
		expect(queryByTestId(container, 'next')).not.toBeInTheDocument();
		expect(queryByTestId(container, 'previous')).toBeInTheDocument();
		// expect(paginationNext.textContent).toBe('next >');
		expect(paginationPrev.textContent).toBe('< prev');
		//expect(paginationPrev).toBeFalsy();
	});
});
