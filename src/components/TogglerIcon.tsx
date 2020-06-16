import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const StyledIcon = styled(FontAwesomeIcon)`
	color: white;
	font-size: 1.6rem;
`;
export const TogglerIcon: FunctionComponent = () => (
	<StyledIcon icon={faBars} />
);
