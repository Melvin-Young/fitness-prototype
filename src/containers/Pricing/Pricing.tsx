import React, { FunctionComponent } from 'react';
import Section, { ISectionProps } from '../../components/Section';

export const Pricing: FunctionComponent<ISectionProps> = (props) => (
	<Section id={props.id} className={props.className}>
		Pricing
	</Section>
);
