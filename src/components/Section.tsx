import * as React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
	height: 100vh;
	background-color: grey;
	margin-bottom: 5px;
`;
const Section: React.FunctionComponent<ISectionProps> = (props) => {
	return (
		<StyledSection id={props.id} className={props.className}>
			{props.children}
		</StyledSection>
	);
};

export interface ISectionProps extends React.HtmlHTMLAttributes<any> {
	id: string;
}

export default Section;
