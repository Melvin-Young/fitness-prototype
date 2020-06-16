import React, { FunctionComponent } from 'react';
import Section, { ISectionProps } from '../../components/Section';

export const Clients: FunctionComponent<ISectionProps> = (props) => (
	<Section id={props.id}>Clients</Section>
);
