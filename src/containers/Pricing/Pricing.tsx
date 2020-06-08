import * as React from 'react';
import Section, { ISectionProps } from '../../components/Section';

export const Pricing: React.FunctionComponent<ISectionProps> = (props) => (
	<Section id={props.id} className={props.className}>
		Pricing
	</Section>
);
