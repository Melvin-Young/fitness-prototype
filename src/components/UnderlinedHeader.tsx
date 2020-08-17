import React, { FunctionComponent, HtmlHTMLAttributes } from 'react';
import styled from 'styled-components';
import { Col } from 'reactstrap';

const StyledHeading = styled(Col)`
	margin-bottom: 1.9rem;
	& > h3 {
		text-transform: uppercase;
		font-weight: 700;
		font-size: 1.9rem;
		text-align: center;
	}
	& > div {
		width: 4rem;
		height: 0.25rem;
		background-color: ${(props) => props.theme.secondary};
		margin: 0 auto 2rem;
	}
`;

const UnderlinedHeader: FunctionComponent<IHeadingProps> = (props) => (
	<StyledHeading className={props.className} xs={12}>
		<h3>{props.title}</h3>
		<div></div>
	</StyledHeading>
);

interface IHeadingProps extends HtmlHTMLAttributes<any> {
	title: string;
}

export default UnderlinedHeader;
