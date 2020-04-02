import React from 'react';
import { ArrowRight } from 'react-feather';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../routes';
import illustration4 from '../../assets/img/illustrations/illustration-4.png';

const Hero = () => {
	return (
		<section className="position-relative pt-11 pt-md-14 mt-n11">
			<div className="shape shape-fluid-x shape-blur-2 svg-shim text-light">
				<svg viewBox="0 0 1313 768" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M442.794 768C605.882 768 748.362 679.773 825.111 548.444L825.294 549C825.294 549 825.543 548.251 826.056 546.819C839.139 524.212 850.279 500.339 859.248 475.43C901.996 397.81 989.306 277.09 1144.29 206L1143.37 205.307C1230.34 171.296 1295.63 94.049 1312.83 0H1.29419V295.514C0.631105 305.423 0.294189 315.422 0.294189 325.5C0.294189 569.886 198.408 768 442.794 768Z"
						fill="currentColor"
					/>
				</svg>
			</div>

			<div className="container">
				<div className="row align-items-center text-center text-md-left">
					<div className="col-12 col-md-6">
						<img
							src={illustration4}
							alt="InvoiceMyClients.com"
							className="img-fluid float-right float-md-none mb-6 mb-md-0"
						/>
					</div>
					<div className="col-12 col-md-6">
						<h1 className="display-1 font-weight-bold">
							<div>Get paid. Fast.</div>
						</h1>

						<h2>We make it quick, easy, and secure for your clients to pay their invoices.</h2>

						<Link className="btn btn-primary lift mt-3" to={ROUTES.signup}>
							It&apos;s free to get started <ArrowRight className="ml-3" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export { Hero };
