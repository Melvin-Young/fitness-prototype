import * as React from 'react';
import Section, { ISectionProps } from '../../components/Section';
import { ConfigurableSpan } from '../../components/ConfigurableSpan';
import styled from 'styled-components';

const StyledSpan = styled(ConfigurableSpan)`
&&& {
color: ${props => props.theme.secondary};
}
`
export const Home: React.FunctionComponent<ISectionProps> = (props) => (
	<Section id={props.id}>
		<div className="caption text-center text-light text-uppercase">
			<h1 className="font-weight-bold">
				Welcome to <StyledSpan>Nuno</StyledSpan>
			</h1>
		</div>
	</Section>
);
