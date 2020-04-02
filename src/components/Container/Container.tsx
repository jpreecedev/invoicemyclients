import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

interface ContainerProps {
	additionalClasses?: string | string[];
}

const Container: React.FC<ContainerProps> = ({ children, additionalClasses = '' }) => {
	return (
		<section className={clsx(styles.container, 'shadow-sm mb-5 rounded-lg', additionalClasses)}>
			{children}
		</section>
	);
};

export { Container };
