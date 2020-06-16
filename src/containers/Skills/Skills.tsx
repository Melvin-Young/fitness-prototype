import React, { FunctionComponent } from 'react';
import Section, { ISectionProps } from '../../components/Section';

export const Skills: FunctionComponent<ISectionProps> = (props) => (
	<Section id={props.id} className={props.className}>
		Skills
	</Section>
);
