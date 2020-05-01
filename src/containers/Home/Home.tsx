import * as React from 'react';
import Section, { ISectionProps } from '../../components/Section';

export const Home: React.FunctionComponent<ISectionProps> = (props) => (
	<Section id={props.id}>Test</Section>
);
