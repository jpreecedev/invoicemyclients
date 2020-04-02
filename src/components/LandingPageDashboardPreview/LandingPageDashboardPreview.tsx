import React from 'react';

import Dashkit from '../../assets/img/screenshots/desktop/dashkit-alt.jpg';
import Macbook from '../../assets/img/devices/macbook.svg';
import DashkitMobile from '../../assets/img/screenshots/mobile/dashkit-alt.jpg';
import IPhoneX from '../../assets/img/devices/iphonex.svg';

const LandingPageDashboardPreview = () => {
	return (
		<section className="pt-8 pt-md-11">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-md-10 col-lg-8 text-center">
						<h6 className="text-uppercase text-primary font-weight-bold">Complete visibility</h6>

						<h1 className="font-weight-bold">See your figures at a glance.</h1>

						<p className="font-size-lg text-muted mb-7">
							Via our dashboard, we make it easy for you to track your invoices, income and revenue
							over time.
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-12 order-md-2">
						<div className="device-combo device-combo-macbook-iphonex mb-6 mb-md-0">
							<div className="device device-macbook">
								<img src={Dashkit} className="device-screen" alt="..." />
								<img src={Macbook} className="img-fluid" alt="..." />
							</div>

							<div className="device device-iphonex">
								<img src={DashkitMobile} className="device-screen" alt="..." />
								<img src={IPhoneX} className="img-fluid" alt="..." />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export { LandingPageDashboardPreview };
