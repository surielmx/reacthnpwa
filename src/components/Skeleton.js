import React from 'react';
import PropTypes from 'prop-types';
import { ThemeConsumer } from '../context/context';

const Skeleton = ({
	height = '38px',
	width = 'inherit',
	center = false,
	variant = 'rect',
	className = '',
}) => {
	const initStyle = {
		display: 'block',
	};
	const variantText = variant === 'text' && {
		marginTop: '0.8rem',
		borderRadius: '4px',
		marginBottom: '0.8rem',
	};
	const variantCircle = variant === 'circle' && {
		borderRadius: '50%',
	};
	const centerStyle = center && { margin: '0 auto' };
	const widthStyle = width && { width };
	const heightStyle = (height && { height }) || { height: '1rem' };
	const skeletonStyle = {
		...initStyle,
		...heightStyle,
		...widthStyle,
		...centerStyle,
		...variantText,
		...variantCircle,
	};
	return (
		<ThemeConsumer>
			{({ theme = {} }) => (
				<div
					className={className}
					style={{ ...skeletonStyle, backgroundColor: theme.skeleton }}
				></div>
			)}
		</ThemeConsumer>
	);
};

Skeleton.propTypes = {
	height: PropTypes.string,
	width: PropTypes.string,
	center: PropTypes.bool,
	variant: PropTypes.string,
	className: PropTypes.string,
};

export default Skeleton;
