import React from 'react';

interface CardProps {
	title?: string;
}

const Card: React.FC<CardProps> = ({ title = '', children }) => {
	return (
		<div className="card shadow-light-lg card-border border-success mb-5">
			<div className="card-body">
				{title && <h2 className="card-title text-body">{title}</h2>}
				{children}
			</div>
		</div>
	);
};

export { Card };
