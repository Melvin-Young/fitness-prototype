import * as React from 'react';
import styled from 'styled-components';
import Section, { ISectionProps } from '../../components/Section';

const FeaturesSection = styled(Section)`
	padding-top: 60px;
`;
export const Features: React.FunctionComponent<ISectionProps> = (props) => (
	<FeaturesSection id={props.id}>Features</FeaturesSection>
);
