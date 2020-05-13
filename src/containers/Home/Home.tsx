import * as React from 'react';
import Section, { ISectionProps } from '../../components/Section';

export const Home: React.FunctionComponent<ISectionProps> = (props) => (
	<Section id={props.id}>
		<div className="caption text-center-text-light text-uppercase"></div>
	</Section>
);
