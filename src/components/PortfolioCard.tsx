import React, { FunctionComponent } from 'react';
import { Col } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import styled from 'styled-components';

const StyledCol = styled(Col)`
	.image {
		transition: transform 0.4s ease;
		&:hover {
			cursor: zoom-in;
			transform: scale(1.3);
		}
	}
`;
const PortfolioCard: FunctionComponent<ICardProps> = (props) => {
	return (
		<StyledCol className="p-0" sm={6} md={3}>
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
		</StyledCol>
	);
};

interface ICardProps {
	animation: string;
	image: any;
	delayMs?: number;
	gallery?: string;
}

export default PortfolioCard;
