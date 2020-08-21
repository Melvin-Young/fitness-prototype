import React, { FunctionComponent } from 'react';
import Section, { ISectionProps } from '../../components/Section';
import { Jumbotron, Container, Col, Row } from 'reactstrap';
import UnderlinedHeader from '../../components/UnderlinedHeader';
import ScrollAnimation from 'react-animate-on-scroll';
import { StylableButton } from '../../components/StyledButton';
import styled from 'styled-components';

const StyledRow = styled(Row)`
	&&& {
		justify-content: center;
		text-align: center;
		.flex-control {
			height: 100%;
		}
		.pricing-column {
			height: 100%;
			background: white;
			padding: 0 2.5rem;
			border-top: ${(props) => `.25rem solid ${props.theme.secondary}`};
			&__header {
				text-transform: uppercase;
			}
		}
	}
`;

export const Pricing: FunctionComponent<ISectionProps> = (props) => (
	<Section id={props.id} className={props.className}>
		<Jumbotron className="mb-0">
			<Container className="my-2">
				<UnderlinedHeader title="Pricing"></UnderlinedHeader>
				<StyledRow className="px-lg-4 px-xl-5">
					<Col md={6} lg={4}>
						<ScrollAnimation
							className="flex-control"
							animateIn="fadeInLeft"
							animateOut="fadeOut">
							<div className="pricing-column py-4">
								<h3 className="py-2 mx-3 border-bottom pricing-column__header">
									Basic
								</h3>
								<p className="lead py-2 pricing-column__blurb">
									{' '}
									The Basic Plan, the best plan to get you started off.
								</p>
								<h4 className="pb-2 pricing-column__feature">
									Domain Names: 1
								</h4>
								<h4 className="pb-2 pricing-column__feature">
									Email Addresses: 1
								</h4>
								<h4 className="pricing-column__feature">Hard Drive: 50GB</h4>
								<h1 className="py-3">$49</h1>
								<StylableButton
									className="small"
									href="#contact"
									themeSecondaty
									square>
									{' '}
									Buy Now
								</StylableButton>
							</div>
						</ScrollAnimation>
					</Col>
					<Col className="" md={6} lg={4}>
						<ScrollAnimation
							className="flex-control"
							animateIn="fadeInUp"
							animateOut="fadeOut">
							<div className="pricing-column py-4">
								<div className="ribbon">Best Value</div>
								<h3 className="py-2 mx-3 border-bottom pricing-column__header text-nuno font-weight-bold">
									Pro
								</h3>
								<p className="lead py-2 pricing-column__blurb">
									{' '}
									The Pro Plan, the best overall value you can get.
								</p>
								<h4 className="pb-2 pricing-column__feature">
									Domain Names: 5
								</h4>
								<h4 className="pb-2 pricing-column__feature">
									Email Addresses: 3
								</h4>
								<h4 className="pricing-column__feature">Hard Drive: 100GB</h4>
								<h1 className="py-3">$99</h1>
								<StylableButton
									className="small"
									href="#contact"
									themeSecondaty
									square>
									{' '}
									Buy Now
								</StylableButton>
							</div>
						</ScrollAnimation>
					</Col>
					<Col className="" md={6} lg={4}>
						<ScrollAnimation
							className="flex-control"
							animateIn="fadeInRight"
							animateOut="fadeOut">
							<div className="pricing-column py-4">
								<h3 className="py-2 mx-3 border-bottom pricing-column__header">
									Premium
								</h3>
								<p className="lead py-2 pricing-column__blurb">
									{' '}
									Go premium if you need a little extra space.
								</p>
								<h4 className="pb-2 pricing-column__feature">
									Domain Names: 10
								</h4>
								<h4 className="pb-2 pricing-column__feature">
									Email Addresses: 5
								</h4>
								<h4 className="pricing-column__feature">Hard Drive: 150GB</h4>
								<h1 className="py-3">$149</h1>
								<StylableButton
									className="small"
									href="#contact"
									themeSecondaty
									square>
									{' '}
									Buy Now
								</StylableButton>
							</div>
						</ScrollAnimation>
					</Col>
				</StyledRow>
			</Container>
		</Jumbotron>
	</Section>
);
