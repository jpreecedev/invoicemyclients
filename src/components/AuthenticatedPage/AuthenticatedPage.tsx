import React from 'react';
import firebase from 'firebase/app';
import { Redirect } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import { NavBar } from '../../components/NavBar';
import { ROUTES } from '../../routes';

interface AuthenticatedPageProps {
	title: string;
}

const AuthenticatedPage: React.FC<AuthenticatedPageProps> = ({ children, title }) => {
	const [user, initialising] = useAuthState(firebase.auth());
	return (
		<>
			{!initialising && !user && <Redirect to={ROUTES.dashboard} />}
			<NavBar />
			<main className="mt-5 mb-10 pb-10">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h1>{title}</h1>
						</div>
					</div>
					<div className="row">
						<div className="col-12">{children}</div>
					</div>
				</div>
			</main>
		</>
	);
};

export { AuthenticatedPage };
