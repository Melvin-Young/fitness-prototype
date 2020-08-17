import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
	background-color: transparent;

	&.offset::before {
		content: '';
		height: 4rem;
		display: block;
		margin-top: -4rem;
	}
`;
const Section: FunctionComponent<ISectionProps> = (props) => {
	return (
		<StyledSection id={props.id} className={props.className}>
			{props.children}
		</StyledSection>
	);
};

export interface ISectionProps extends React.HtmlHTMLAttributes<any> {
	id?: string;
}

export default Section;
