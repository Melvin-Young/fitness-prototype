import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Section, { ISectionProps } from '../../components/Section';
import Blurb from '../../components/Blurb';
import { Jumbotron, Container, Col, Row } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import UnderlinedHeader from '../../components/UnderlinedHeader';
import FeatureCard from '../../components/FeatureCard';
import TechCard from '../../components/TechCard';
import {
	faMobileAlt,
	faPlay,
	faDesktop,
	faAngleDoubleDown,
	faSlidersH,
} from '@fortawesome/free-solid-svg-icons';
import {
	faWpforms,
	faBootstrap,
	faHtml5,
	faCss3Alt,
} from '@fortawesome/free-brands-svg-icons';
import BackgroundImage from '../../components/FixedImage';
import AppleImage from '../../img/fixed/apple.jpg';

const FeaturesSection = styled(Section)``;
export const Features: FunctionComponent<ISectionProps> = (props) => (
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
			<BackgroundImage height="40vh" imageUrl={AppleImage} dark>
				<UnderlinedHeader title="Built With Care" />
				<TechCard
					animation="fadeInLeft"
					icon={faHtml5}
					header="Html 5"
					body="Built with the latest, HTML 5."
				/>
				<TechCard
					animation="fadeInUp"
					icon={faBootstrap}
					header="Bootstrap"
					body="Built with the latest, Bootstrap 4."
				/>
				<TechCard
					animation="fadeInRight"
					icon={faCss3Alt}
					header="Css 3"
					body="Built with the latest, CSS 3."
				/>
			</BackgroundImage>
			{/* End of Fixed Background Image Dark */}
		</ScrollAnimation>
	</FeaturesSection>
);
