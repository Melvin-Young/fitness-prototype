import React, { FunctionComponent } from 'react';
import Section, { ISectionProps } from '../../components/Section';
import { Container, Row, Col } from 'reactstrap';
import UnderlinedHeader from '../../components/UnderlinedHeader';
import PortfolioCard from '../../components/PortfolioCard';
import { StylableButton } from '../../components/StyledButton';
import { SRLWrapper } from 'simple-react-lightbox';

export const Portfolio: FunctionComponent<ISectionProps> = (props) => (
	<Section id={props.id} className={props.className}>
		<Container className="px-0" fluid>
			<Row className="py-5">
				<UnderlinedHeader className="mt-5" title="Portfolio" />
				<PortfolioCard
					animation="bounceInLeft"
					image={require(`../../img/portfolio/1.jpg`)}
					gallery="portfolio-proj"
					delayMs={200}
				/>
				<PortfolioCard
					animation="bounceInLeft"
					image={require(`../../img/portfolio/2.jpg`)}
					gallery="portfolio-proj"
				/>
				<PortfolioCard
					animation="bounceInRight"
					image={require(`../../img/portfolio/3.jpg`)}
					gallery="portfolio-proj"
				/>
				<PortfolioCard
					animation="bounceInRight"
					image={require(`../../img/portfolio/4.jpg`)}
					gallery="portfolio-proj"
					delayMs={200}
				/>
				<PortfolioCard
					animation="bounceInLeft"
					image={require(`../../img/portfolio/5.jpg`)}
					gallery="portfolio-proj"
					delayMs={200}
				/>
				<PortfolioCard
					animation="bounceInLeft"
					image={require(`../../img/portfolio/6.jpg`)}
					gallery="portfolio-proj"
				/>
				<PortfolioCard
					animation="bounceInRight"
					image={require(`../../img/portfolio/7.jpg`)}
					gallery="portfolio-proj"
				/>
				<PortfolioCard
					animation="bounceInRight"
					image={require(`../../img/portfolio/8.jpg`)}
					gallery="portfolio-proj"
					delayMs={200}
				/>
			</Row>
			<Row
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}>
				<Col
					sm={8}
					md={9}
					lg={10}
					style={{
						textAlign: 'center',
					}}>
					<span className="lead">
						{' '}
						This is some placeholder for my portfolio blurb. Pls send hlp 🥺
					</span>
				</Col>
				<StylableButton square size="lg">
					I'm a button
				</StylableButton>
			</Row>
		</Container>
	</Section>
);
