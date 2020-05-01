import React, { useState } from 'react';
// import styled from 'styled-components';
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
function App() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
	return (
		<div className="App">
			<Navbar fixed="top" color="light" light expand="md">
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
						<NavItem>
							<NavLink href="#section-1">section 1</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#section-2">section 2</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#section-3">section 3</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#section-4">section 4</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#section-5">section 5</NavLink>
						</NavItem>
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
