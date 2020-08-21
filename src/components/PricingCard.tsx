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

const PricesCard: FunctionComponent<ICardProps> = (props) => {
	return <StyledCard md={4} {...props}></StyledCard>;
};

interface ICardProps {}

export default PricesCard;
