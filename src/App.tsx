import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import './App.scss';
import Scrollspy from 'react-scrollspy';
import { Home } from './containers/Home/Home';
import { Features } from './containers/Features/Features';
import { Portfolio } from './containers/Portfolio/Portfolio';
import { Pricing } from './containers/Pricing/Pricing';
import { Team } from './containers/Team/Team';
import { Skills } from './containers/Skills/Skills';
import { Clients } from './containers/Clients/Clients';
import { Contact } from './containers/Contact/Contact';
import {
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Nav,
	NavItem,
	Collapse,
	NavLink,
} from 'reactstrap';

// const styledNav = styled(Scrollspy)`
// 	&&& {
// 		display: flex;
// 		justify-content: space-between;
// 		height: 100px;
// 		position: fixed;
// 		color: ${(props) => props.theme.main};
// 	}
// `;

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

	const toggle = () => setIsOpen(!isOpen);
	return (
		<div className="App">
			<Navbar fixed="top" color="dark" dark expand="lg">
				<NavbarBrand href="/">BootKamp</NavbarBrand>
				<Collapse isOpen={isOpen} navbar>
					<Scrollspy
						className="scrollspy"
						items={[
							'Home',
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
			<Home id="Home" />
			<Features id="Features" />
			<Portfolio id="Portfolio" />
			<Pricing id="Pricing" />
			<Team id="Team" />
			<Skills id="Skills" />
			<Clients id="Clients" />
			<Contact id="Contact" />
		</div>
	);
}

export default App;
