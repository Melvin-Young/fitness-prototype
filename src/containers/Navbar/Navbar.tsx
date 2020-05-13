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
import { ConfigurableSpan as Span } from '../../components/ConfigurableSpan';
import './Navbar.scss';

const StyledNavbar = styled(ReactstrapNavbar)`
	&&& {
		padding: 0.7rem 1rem;
		text-transform: uppercase;
		font-weight: 700;
		letter-spacing: 0.1rem;
		font-size: 0.9rem;
		transition: all 0.5s ease;
		background-color: transparent;
		&.dark-theme {
			transition: all 1s ease;
			background-color: ${(props) => props.theme.transparentBlack};
		}
	}
`;

export const Navbar: React.FunctionComponent = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleNavbar = () => setIsOpen(!isOpen);
	const [isScrolled, setScrolled] = useState('');

	useEffect(() => {
		const onScroll = () => {
			window.scrollY > 300 ? setScrolled(true) : setScrolled(false);
		};

		document.addEventListener('scroll', onScroll);
		return () => {
			document.removeEventListener('scroll', onScroll);
		};
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	// const isDark = () => isScrolled || isOpen;
	const handleLinkClick = (event) => {
		setIsOpen(false);
	};
	return (
		<StyledNavbar
			className={`${isScrolled || isOpen ? 'dark-theme' : ''}`}
			fixed="top"
			expand="lg">
			<NavbarBrand href="#home">
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
						<ScrollspyNavLink name="home">
							<NavLink href="#home">
								<Span onClick={handleLinkClick}>Home</Span>
							</NavLink>
						</ScrollspyNavLink>
					</NavItem>
					<NavItem>
						<ScrollspyNavLink name="features">
							<NavLink href="#features">
								<Span onClick={handleLinkClick}>Features</Span>
							</NavLink>
						</ScrollspyNavLink>
					</NavItem>
					<NavItem>
						<ScrollspyNavLink name="portfolio">
							<NavLink className="header-link" href="#portfolio">
								<Span onClick={handleLinkClick}>Portfolio</Span>
							</NavLink>
						</ScrollspyNavLink>
					</NavItem>
					<NavItem>
						<ScrollspyNavLink name="pricing">
							<NavLink className="header-link" href="#pricing">
								<Span onClick={handleLinkClick}>Pricing</Span>
							</NavLink>
						</ScrollspyNavLink>
					</NavItem>
					<NavItem>
						<ScrollspyNavLink name="team">
							<NavLink className="header-link" href="#team">
								<Span onClick={handleLinkClick}>Team</Span>
							</NavLink>
						</ScrollspyNavLink>
					</NavItem>
					<NavItem>
						<ScrollspyNavLink name="skills">
							<NavLink className="header-link" href="#skills">
								<Span onClick={handleLinkClick}>Skills</Span>
							</NavLink>
						</ScrollspyNavLink>
					</NavItem>
					<NavItem>
						<ScrollspyNavLink name="clients">
							<NavLink className="header-link" href="#clients">
								<Span onClick={handleLinkClick}>Clients</Span>
							</NavLink>
						</ScrollspyNavLink>
					</NavItem>
					<NavItem>
						<ScrollspyNavLink name="contact">
							<NavLink className="header-link" href="#Contact">
								<Span onClick={handleLinkClick}>Contact</Span>
							</NavLink>
						</ScrollspyNavLink>
					</NavItem>
				</Nav>
			</Collapse>
		</StyledNavbar>
	);
};
