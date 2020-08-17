import React, { FunctionComponent } from 'react';
import Section, { ISectionProps } from '../../components/Section';
import { Container, Row } from 'reactstrap';
import UnderlinedHeader from '../../components/UnderlinedHeader';
import PortfolioCard from '../../components/PortfolioCard';

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
		</Container>
	</Section>
);
