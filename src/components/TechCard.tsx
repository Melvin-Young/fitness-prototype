import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import ScrollAnimation from 'react-animate-on-scroll';
import { Col } from 'reactstrap';
import styled from 'styled-components';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const StyledCard = styled(Col)`
	.header {
		text-transform: uppercase;
	}
	.icon {
		color: ${(props) => props.theme.secondary};
	}
`;

const TechCard: FunctionComponent<ICardProps> = (props) => {
	return (
		<StyledCard md={4} {...props}>
			<ScrollAnimation animateIn={props.animation} animateOut="fadeOut">
				<h3 className="header">{props.header}</h3>
				<div className="py-2">
					<span className="icon fa-stack fa-2x">
						<FontAwesomeIcon
							className=" background fa-stack-2x"
							icon={props.icon}
						/>
					</span>
				</div>
				<span className="lead">{props.body}</span>
			</ScrollAnimation>
		</StyledCard>
	);
};

interface ICardProps {
	animation: string;
	icon: IconProp;
	header: string;
	body: string;
	offsetIcon?: number[];
	transformIcon?: string;
}

export default TechCard;
