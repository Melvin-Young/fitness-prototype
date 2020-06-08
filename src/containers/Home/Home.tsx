import React, { FunctionComponent, HtmlHTMLAttributes } from 'react';
import styled from 'styled-components';
import { Animated } from 'react-animated-css';
import { StylableButton } from '../../components/StyledButton';
import { FadeInSection } from '../../components/FadeInSection';
import Section from '../../components/Section';

const StyledHomeSection = styled(Section)`
	position: absolute;
	top: 38%;
	width: 100%;
	max-width: 100%;
	z-index: 1;
	height: auto;
`;
const StyledLandingText = styled.div`
	.heading-text {
		font-size: 4.5rem;
		letter-spacing: 0.3rem;
		text-shadow: 0.1rem 0.1rem 1.5rem black;
		font-weight: bold;
		padding-bottom: 1rem;
		span {
			color: ${(props) => props.theme.secondary};
		}
	}

	.secondary-heading {
		font-size: 2.5rem;
		text-shadow: 0.1rem 0.1rem 0.5rem black;
		padding-bottom: 2rem;
	}
	.get-started {
		font-weight: bold;
		font-size: 1.5rem;
		border-width: medium;
		padding: 0.8rem 1.5rem;
	}
`;

export const Home: FunctionComponent<HtmlHTMLAttributes<any>> = (props) => (
	// <FadeInSection id="home" fadeTarget="#bouncingArrow">
	<StyledHomeSection style={{ position: 'relative' }} id="home">
		<StyledLandingText className="caption text-center text-light text-uppercase">
			<Animated
				animationIn="bounceInUp"
				animationOut="fadeOut"
				isVisible={true}>
				<h1 className="heading-text">
					Welcome to <span>Nuno</span>
				</h1>
			</Animated>
			<Animated
				animationIn="bounceInUp"
				animationOut="fadeOut"
				animationInDuration={2000}
				isVisible>
				<h3 className="secondary-heading">
					Animated Bootstrap Site converted to react
				</h3>
			</Animated>
			<Animated
				animationIn="bounceInUp"
				animationOut="fadeOut"
				animationInDuration={2400}
				isVisible>
				<StylableButton
					id="bouncingArrow"
					outline
					color="light"
					size="lg"
					className=" get-started rounded-0"
					href="#features">
					Get Started
				</StylableButton>
			</Animated>
		</StyledLandingText>
	</StyledHomeSection>
	// </FadeInSection>
);
