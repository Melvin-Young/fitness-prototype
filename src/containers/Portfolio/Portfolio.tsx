import React, { FunctionComponent } from 'react';
import Section, { ISectionProps } from '../../components/Section';

export const Portfolio: FunctionComponent<ISectionProps> = (props) => (
	<Section id={props.id} className={props.className}>
		Portfolio
	</Section>
);
