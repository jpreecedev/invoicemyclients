import React from 'react';
import { Link } from 'react-router-dom';

import { Loading } from '../Loading';
import { ROUTES } from '../../routes';
import { useFirebaseInvoiceList } from '../../hooks';

const InvoicesList = () => {
	const [invoices, loading] = useFirebaseInvoiceList();

	if (!invoices || !invoices.length) {
		if (!loading) {
			return (
				<div>
					<p>It look&apos;s like you do not have any invoices yet!</p>
					<p className="mb-5">Would you like to create a new invoice now?</p>
				</div>
			);
		}
		return <Loading />;
	}

	return (
		<>
			<div className="table-responsive mb-3">
				<table className="table table-hover">
					<thead>
						<tr>
							<th scope="col">Company name</th>
							<th scope="col">Contact name</th>
							<th scope="col">Invoice number</th>
							<th scope="col">Due date</th>
						</tr>
					</thead>
					<tbody>
						{invoices.map((invoice, index) => {
							return (
								<tr key={index}>
									<td>{invoice.companyName}</td>
									<td>{invoice.contactName}</td>
									<td>
										<Link to={`${ROUTES.invoicing.addEdit}/${invoice.key}`}>
											{invoice.invoiceNumber}
										</Link>
									</td>
									<td>{invoice.dueDate}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
};

export { InvoicesList };
