import * as React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
	height: 80vh;
`;
const Section: React.FunctionComponent<ISectionProps> = (props) => {
	return <StyledSection id={props.id}>{props.children}</StyledSection>;
};

export interface ISectionProps {
	id: string;
}

export default Section;
