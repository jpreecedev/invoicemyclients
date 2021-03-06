import React from 'react';
import { Link } from 'react-router-dom';

import { AuthenticatedPage } from '../../components/AuthenticatedPage';
import { ClientsList } from '../../components/ClientsList';
import { ROUTES } from '../../routes';

const ClientsPage = () => {
	return (
		<AuthenticatedPage title="Clients">
			<ClientsList />
			<Link to={ROUTES.clients.addEdit} className="btn btn-primary btn-sm d-inline">
				Add new client
			</Link>
		</AuthenticatedPage>
	);
};

export { ClientsPage };
