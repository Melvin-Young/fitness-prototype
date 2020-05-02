import * as React from 'react';
import Section, { ISectionProps } from '../../components/Section';

export const Header: React.FunctionComponent<ISectionProps> = (props) => (
	<Section id={props.id}>Header</Section>
);
