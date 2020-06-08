import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import ScrollAnimation from 'react-animate-on-scroll';
import { Col } from 'reactstrap';
import styled from 'styled-components';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const StyledCard = styled(Col)`
	text-align: center;
		.foreground {
 		transform: ${(props) => {
			if (props.offset) {
				const [xOffset, yOffset] = props.offset;
				return `translate(${xOffset}px, ${yOffset}px)`;
			}
		}};
		}
	/* .icon {
		position: relative;
		margin: 0 auto 1rem;
		width: 64px;
		height: 64px;
		&-foreground {
			color: white;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-52%, -45%);
		}
		&-background {
			color: ${(props) => props.theme.secondary};
		}
	} */
`;

const FeatureCard: FunctionComponent<ICardProps> = (props) => {
	return (
		<StyledCard sm={6} md={4} {...props}>
			<ScrollAnimation animateIn={props.animation}>
				{/* <div className="icon">
				<FontAwesomeIcon className="icon-foreground" icon={faFlag} size="3x" />
				<FontAwesomeIcon
        className="icon-background"
        icon={faCircle}
        size="4x"
				/>
			</div> */}
				<span className="fa-stack fa-2x">
					<FontAwesomeIcon className="fa-stack-2x" icon={faCircle} />
					<FontAwesomeIcon
						className=" foreground fa-stack-1x fa-inverse"
						icon={props.icon}
						transform={props.transformIcon}
					/>
				</span>
				<h3 style={{ textTransform: 'uppercase' }}>{props.header}</h3>
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
export default FeatureCard;
