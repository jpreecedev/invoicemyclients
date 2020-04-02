import React from 'react';

const Loading = () => {
	return (
		<div className="mt-5 mb-10 text-center">
			<div className="spinner-grow text-primary" role="status">
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
};

export { Loading };
