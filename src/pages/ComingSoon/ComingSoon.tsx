import React from 'react';
import illustration4 from '../../assets/img/illustrations/illustration-4.png';

const ComingSoonPage = () => (
	<section className="pt-8 pt-md-11">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-12 col-md-10 col-lg-8 text-center">
					<img
						src={illustration4}
						alt="InvoiceMyClients.com"
						className="img-fluid float-right float-md-none mb-6 mb-md-0"
					/>
					<h1>Thank you for your interest!</h1>
					<p>We will be launching soon... hold tight for now!</p>
				</div>
			</div>
		</div>
	</section>
);

export { ComingSoonPage };
