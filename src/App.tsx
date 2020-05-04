import React from 'react';
// import styled from 'styled-components';
import './App.scss';
import { Scrollspy } from 'reactstrap-scrollspy';
import { Features } from './containers/Features/Features';
import { Portfolio } from './containers/Portfolio/Portfolio';
import { Pricing } from './containers/Pricing/Pricing';
import { Team } from './containers/Team/Team';
import { Skills } from './containers/Skills/Skills';
import { Clients } from './containers/Clients/Clients';
import { Contact } from './containers/Contact/Contact';
import { Navbar } from './containers/Navbar/Navbar';

// const StyledNavItem = styled(NavItem)`
// 	&&& > .header-link {
// 		color: ${(props) => props.theme.textPrimary};
// 	}
// 	&&&.isCurrent > .header-link {
// 		color: ${(props) => props.theme.secondary};
// 		font-weight: 700;
// 	}
// `;
function App() {
	return (
		<div style={{ overflow: 'hidden' }}>
			<Scrollspy
				names={[
					'navbar',
					'features',
					'portfolio',
					'pricing',
					'team',
					'skills',
					'clients',
					'contact',
					null,
				]}
				homeIndex={1}>
				<Navbar />
				<Features id="features" />
				<Portfolio id="portfolio" />
				<Pricing id="pricing" />
				<Team id="team" />
				<Skills id="skills" />
				<Clients id="clients" />
				<Contact id="contact" />
			</Scrollspy>
		</div>
	);
}

export default App;
