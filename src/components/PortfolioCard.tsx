import React, { FunctionComponent } from 'react';
import { Col } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';

const PortfolioCard: FunctionComponent<ICardProps> = (props) => {
	return (
		<Col className="p-0" sm={6} md={3}>
			<ScrollAnimation
				animateIn={props.animation}
				delay={props.delayMs}
				animateOut="fadeOut">
				<div className="portfolio-item overflow-hidden">
					<a
						href={props.image}
						// data-lightbox={props.gallery}
						data-title="My Portfolio Image Description">
						<img className="image w-100" alt="" src={props.image} />
					</a>
				</div>
			</ScrollAnimation>
		</Col>
	);
};

interface ICardProps {
	animation: string;
	image: any;
	delayMs?: number;
	gallery?: string;
}

export default PortfolioCard;
