import * as React from 'react';
import styled from 'styled-components';
import Section, { ISectionProps } from '../../components/Section';
import Blurb from '../../components/Blurb';
import { Jumbotron, Container, Col, Row } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import UnderlinedHeader from '../../components/UnderlinedHeader';
import FeatureCard from '../../components/FeatureCard';
import {
	faMobileAlt,
	faPlay,
	faDesktop,
	faAngleDoubleDown,
	faSlidersH,
} from '@fortawesome/free-solid-svg-icons';
import { faWpforms } from '@fortawesome/free-brands-svg-icons';

const FeaturesSection = styled(Section)``;
export const Features: React.FunctionComponent<ISectionProps> = (props) => (
	<FeaturesSection id={props.id} className={props.className}>
		<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOut">
			<Blurb />
			<Jumbotron className="m-0 py-6">
				<UnderlinedHeader title="features" />
				<Container fluid>
					<Row className="text-center px-lg-4 px-xl-5">
						<FeatureCard
							animation="fadeInLeft"
							icon={faMobileAlt}
							header="Mobile Friendly"
							body="Nuno features a mobile friendly, responsive first website layout using Bootstrap">
							{' '}
						</FeatureCard>
						<FeatureCard
							animation="fadeInUp"
							icon={faDesktop}
							offsetIcon={[-0.5, 0]}
							header="Full Screen Landing"
							body="Using Bootstrap, the Nuno theme features a full screen carousel landing page.">
							{' '}
						</FeatureCard>
						<FeatureCard
							animation="fadeInRight"
							icon={faPlay}
							offsetIcon={[2, 0]}
							header="Custom Animation"
							body="Animate.css and Waypoints.js allow for smooth animation scrolling down the site.">
							{' '}
						</FeatureCard>
						<FeatureCard
							animation="fadeInLeft"
							icon={faAngleDoubleDown}
							header="Parallax Scrolling"
							body="Fixed background images allow the theme to have content-filled parallax scrolling sections.">
							{' '}
						</FeatureCard>
						<FeatureCard
							animation="fadeInUp"
							icon={faSlidersH}
							header="Content Slider"
							body="Owl.Carousel.js makes navigating content sliders seamless with its content carousel navigation.">
							{' '}
						</FeatureCard>
						<FeatureCard
							animation="fadeInRight"
							icon={faWpforms}
							header="Contact Form"
							body="The Bootstrap HTML form will send directily to your email address using PHPMailer.php">
							{' '}
						</FeatureCard>
					</Row>
				</Container>
			</Jumbotron>
			{/* Start of Fixed Background Image Dark */}
			{/* End of Fixed Background Image Dark */}
		</ScrollAnimation>
	</FeaturesSection>
);
