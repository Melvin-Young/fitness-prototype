//@ts-nocheck
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
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
import { TogglerIcon } from '../../components/TogglerIcon';
import './Navbar.scss';

const StyledNavbar = styled(ReactstrapNavbar)`
	&&& {
		padding: 0.7rem 1rem;
		text-transform: uppercase;
		font-weight: 700;
		letter-spacing: 0.1rem;
		font-size: 0.9rem;
		transition: all 0.3s ease;
		&.isScrolled {
			background-color: red;
		}
	}
`;

export const Navbar: React.FunctionComponent = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleNavbar = () => setIsOpen(!isOpen);
	const [isScrolled, setScroll] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			const scrollCheck = window.scrollY > 50;
			setScroll(scrollCheck);
		};
		document.addEventListener('scroll', onScroll);
		return () => {
			document.removeEventListener('scroll', onScroll);
		};
	}, []); // eslint-disable-line react-hooks/exhaustive-deps
	return (
		<StyledNavbar
			className={`${isScrolled ? 'isScrolled' : ''}`}
			fixed="top"
			expand="lg">
			<NavbarBrand href="/">
				<img
					src={logo}
					style={{
						height: '2rem',
					}}
					alt=""
				/>
			</NavbarBrand>
			<NavbarToggler onClick={toggleNavbar} className="mr-2">
				<TogglerIcon />
			</NavbarToggler>
			<Collapse isOpen={isOpen} navbar>
				<Nav navbar className="ml-auto">
					<NavItem>
						<ScrollspyNavLink name="features">
							<NavLink href="#features">Features</NavLink>
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
		</StyledNavbar>
	);
};
