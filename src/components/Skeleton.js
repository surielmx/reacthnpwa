import React from 'react';
import { ThemeConsumer } from '../context/context';

const Skeleton = ({ height, width, center = false, variant = 'rect', className }) => {
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
			{({ theme }) => (
				<div
					className={className}
					style={{ ...skeletonStyle, backgroundColor: theme.skeleton }}
				></div>
			)}
		</ThemeConsumer>
	);
};

export default Skeleton;
