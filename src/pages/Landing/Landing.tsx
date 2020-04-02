import React from 'react';

import { NavBar } from '../../components/NavBar';
import { Hero } from '../../components/Hero';
import { LandingPageDashboardPreview } from '../../components/LandingPageDashboardPreview';
import { Hub } from '../../components/Hub';
import { Pricing } from '../../components/Pricing';
import { LandingPageCTA } from '../../components/LandingPageCTA';
import { Footer } from '../../components/Footer';

const LandingPage = () => (
	<>
		<NavBar />
		<Hero />
		<LandingPageDashboardPreview />
		<Hub />
		<Pricing />
		<LandingPageCTA />
		<Footer />
	</>
);

export { LandingPage };
