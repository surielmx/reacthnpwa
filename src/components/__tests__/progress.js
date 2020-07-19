// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom';
import Progress from '../Progress/Progress';

test('Render Progress component', function() {
	const div = document.createElement('div');
	ReactDOM.render(<Progress />, div);
});
