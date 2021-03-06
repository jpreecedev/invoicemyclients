import React from 'react';
import firebase from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';

import { AuthenticatedPage } from '../../components/AuthenticatedPage';

const DashboardPage = () => {
	const [user] = useAuthState(firebase.auth());
	return (
		<AuthenticatedPage title="Dashboard">
			<p>Welcome, {user?.displayName}!</p>
		</AuthenticatedPage>
	);
};

export { DashboardPage };
