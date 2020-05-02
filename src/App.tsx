import React, { useState } from 'react';
import styled from 'styled-components';
import './App.scss';
import Scrollspy from 'react-scrollspy';
import { Features } from './containers/Features/Features';
import { Portfolio } from './containers/Portfolio/Portfolio';
import { Pricing } from './containers/Pricing/Pricing';
import { Team } from './containers/Team/Team';
import { Skills } from './containers/Skills/Skills';
import { Clients } from './containers/Clients/Clients';
import { Contact } from './containers/Contact/Contact';
import logo from './img/nuno.png';
import {
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Nav,
	NavItem,
	Collapse,
	NavLink,
	Container,
} from 'reactstrap';

const StyledNavItem = styled(NavItem)`
	&&& > .header-link {
		color: ${(props) => props.theme.textPrimary};
	}
	&&&.isCurrent > .header-link {
		color: ${(props) => props.theme.secondary};
		font-weight: 700;
	}
`;
function App() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNavbar = () => setIsOpen(!isOpen);
	return (
		<Container id="Home" className="App" fluid>
			<Navbar fixed="top" color="dark" dark expand="lg">
				<NavbarBrand href="/">
					<img src={logo} alt="" />
					BootKamp
				</NavbarBrand>
				<NavbarToggler onClick={toggleNavbar} className="mr-2" />
				<Collapse isOpen={isOpen} navbar>
					<Scrollspy
						className="scrollspy ml-auto"
						items={[
							// 'Home',
							'Features',
							'Portfolio',
							'Pricing',
							'Team',
							'Skills',
							'Clients',
							'Contact',
						]}
						currentClassName="isCurrent"
						componentTag={Nav}>
						<StyledNavItem>
							<NavLink className="header-link" href="#Home">
								Home
							</NavLink>
						</StyledNavItem>
						<StyledNavItem>
							<NavLink className="header-link" href="#Features">
								Features
							</NavLink>
						</StyledNavItem>
						<StyledNavItem>
							<NavLink className="header-link" href="#Portfolio">
								Portfolio
							</NavLink>
						</StyledNavItem>
						<StyledNavItem>
							<NavLink className="header-link" href="#Pricing">
								Pricing
							</NavLink>
						</StyledNavItem>
						<StyledNavItem>
							<NavLink className="header-link" href="#Team">
								Team
							</NavLink>
						</StyledNavItem>
						<StyledNavItem>
							<NavLink className="header-link" href="Skills">
								Skills
							</NavLink>
						</StyledNavItem>
						<StyledNavItem>
							<NavLink className="header-link" href="#Clients">
								Clients
							</NavLink>
						</StyledNavItem>
						<StyledNavItem>
							<NavLink className="header-link" href="#Contact">
								Contact
							</NavLink>
						</StyledNavItem>
					</Scrollspy>
				</Collapse>
			</Navbar>
			<Features id="Features" />
			<Portfolio id="Portfolio" />
			<Pricing id="Pricing" />
			<Team id="Team" />
			<Skills id="Skills" />
			<Clients id="Clients" />
			<Contact id="Contact" />
		</Container>
	);
}

export default App;
