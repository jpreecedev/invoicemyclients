import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../routes';
import { AuthenticatedPage } from '../../components/AuthenticatedPage';
import { InvoicesList } from '../../components/InvoicesList';

const InvoicesPage = () => {
	return (
		<AuthenticatedPage title="Invoices">
			<InvoicesList />
			<Link to={ROUTES.invoicing.addEdit} className="btn btn-primary btn-sm d-inline">
				Create new invoice
			</Link>
		</AuthenticatedPage>
	);
};

export { InvoicesPage };
