import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, RouteProps } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/database';
import { useAuthState } from 'react-firebase-hooks/auth';

import { ROUTES } from '../../routes';
import { LandingPage } from '../../pages/Landing';
import { SignUpPage } from '../../pages/SignUp';
import { ErrorPage } from '../../pages/Error';
import { DashboardPage } from '../../pages/Dashboard';
import { InvoicesPage } from '../../pages/Invoices';
import { InvoicesAddPage } from '../../pages/InvoicesUpdate';
import { ClientsPage } from '../../pages/Clients';
import { ClientsUpdatePage } from '../../pages/ClientsUpdate';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
	measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

const AuthenticatedRoute: React.FC<RouteProps> = (props) => {
	const [user, initialising] = useAuthState(firebase.auth());
	if (initialising) {
		return null;
	}

	if (user) {
		return <Route {...props} />;
	}
	return <Redirect to={ROUTES.signup} />;
};

const App: React.FC = () => {
	return (
		<Router>
			<Switch>
				<Route exact path={ROUTES.home}>
					<LandingPage />
				</Route>
				<Route exact path={ROUTES.signup}>
					<SignUpPage />
				</Route>
				<AuthenticatedRoute exact path={ROUTES.dashboard}>
					<DashboardPage />
				</AuthenticatedRoute>
				<AuthenticatedRoute exact path={ROUTES.invoicing.base}>
					<InvoicesPage />
				</AuthenticatedRoute>
				<AuthenticatedRoute exact path={`${ROUTES.invoicing.addEdit}/:id?`}>
					<InvoicesAddPage />
				</AuthenticatedRoute>
				<AuthenticatedRoute exact path={ROUTES.clients.base}>
					<ClientsPage />
				</AuthenticatedRoute>
				<AuthenticatedRoute exact path={`${ROUTES.clients.addEdit}/:id?`}>
					<ClientsUpdatePage />
				</AuthenticatedRoute>
				<Route path="*">
					<ErrorPage />
				</Route>
			</Switch>
		</Router>
	);
};

export { App };
