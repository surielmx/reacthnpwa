// @ts-nocheck
import '@testing-library/jest-dom/extend-expect';
import 'jest-axe/extend-expect';
import React from 'react';
import { NavLink, Route, Router, MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import Navigation from '../Navigation/Navigation';

describe('Navigation', () => {
	test('Render Navigation', function() {
		render(
			<MemoryRouter>
				<Navigation />
			</MemoryRouter>
		);
	});
});
