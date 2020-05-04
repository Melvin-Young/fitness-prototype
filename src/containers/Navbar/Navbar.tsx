import React, { useState } from 'react';
import logo from '../../img/nuno.png';
import {
	Navbar as ReactstrapNavbar,
	NavbarBrand,
	NavbarToggler,
	Nav,
	NavItem,
	Collapse,
	NavLink,
} from 'reactstrap';
import { ScrollspyNavLink } from 'reactstrap-scrollspy';

export const Navbar: React.FunctionComponent = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNavbar = () => setIsOpen(!isOpen);
	return (
		<ReactstrapNavbar fixed="top" color="dark" dark expand="lg">
			<NavbarBrand href="/">
				<img src={logo} style={{ height: '2rem' }} alt="" />
			</NavbarBrand>
			<NavbarToggler onClick={toggleNavbar} className="mr-2" />
			<Collapse isOpen={isOpen} navbar>
				<Nav navbar className="ml-auto">
					<NavItem>
						<ScrollspyNavLink name="features">
							<NavLink className="header-link" href="#features">
								Features
							</NavLink>
						</ScrollspyNavLink>
					</NavItem>
					<NavItem>
						<ScrollspyNavLink name="portfolio">
							<NavLink className="header-link" href="#portfolio">
								Portfolio
							</NavLink>
						</ScrollspyNavLink>
					</NavItem>
					<NavItem>
						<ScrollspyNavLink name="pricing">
							<NavLink className="header-link" href="#pricing">
								Pricing
							</NavLink>
						</ScrollspyNavLink>
					</NavItem>
					<NavItem>
						<ScrollspyNavLink name="team">
							<NavLink className="header-link" href="#team">
								Team
							</NavLink>
						</ScrollspyNavLink>
					</NavItem>
					<NavItem>
						<ScrollspyNavLink name="skills">
							<NavLink className="header-link" href="#skills">
								Skills
							</NavLink>
						</ScrollspyNavLink>
					</NavItem>
					<NavItem>
						<ScrollspyNavLink name="clients">
							<NavLink className="header-link" href="#clients">
								Clients
							</NavLink>
						</ScrollspyNavLink>
					</NavItem>
					<NavItem>
						<ScrollspyNavLink name="contact">
							<NavLink className="header-link" href="#Contact">
								Contact
							</NavLink>
						</ScrollspyNavLink>
					</NavItem>
				</Nav>
			</Collapse>
		</ReactstrapNavbar>
	);
};
