// @ts-nocheck
import '@testing-library/jest-dom/extend-expect';
import 'jest-axe/extend-expect';
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { ThemeProvider, ThemeConsumer } from '../../context/context';
import ToggleButton from '../ToggleButton/ToggleButton';

beforeEach(cleanup);

describe('Toggle Theme', () => {
	test('Render Toggle component', function() {
		const { getByRole } = render(<ToggleButton />);
		const input = getByRole('switch');
		expect(input).toHaveAttribute('type', 'checkbox');
	});
	test('Toggle component accessibility', function() {
		const { getByRole } = render(<ToggleButton />);
		const input = getByRole('switch');
		expect(input).toHaveAttribute('aria-label', 'toggle-theme');
	});
	test('Toggle theme to true (dark)', function() {
		// const onChange = jest.fn();
		const { getByRole } = render(
			<ThemeProvider>
				<ThemeConsumer>{() => <ToggleButton />}</ThemeConsumer>
			</ThemeProvider>
		);
		const input = getByRole('switch');
		// expect(onChange).toHaveBeenCalledWith(true);
		fireEvent.change(input, { target: { checked: true } });
		expect(input).toHaveProperty('checked', true);
	});
	test('Toggle theme to false (light)', function() {
		const { getByRole } = render(<ToggleButton />);
		const input = getByRole('switch');
		fireEvent.change(input, { target: { checked: false } });
		expect(input).toHaveProperty('checked', false);
	});
});
