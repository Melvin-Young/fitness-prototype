import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Row } from 'reactstrap';

const StyledImage = styled('div')<IImageProps>`
	&.fixed {
		position: relative;
		width: 100%;
		display: table;
		& > .fixed-wrap {
			clip: rect(0 auto auto 0);
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			z-index: -9999;
			& > .fixed-inner {
				background-image: url(${(props) => props.imageUrl});
				position: fixed;
				height: 100%;
				width: 100%;
				background-size: cover;
				background-position: center center;
				z-index: -1;
				display: table;
				top: 0;
				left: 0;
			}
		}
	}
`;

const StyledRow = styled(Row)`
	text-align: center;
	background-color: ${(props) => (props.dark ? 'rgba(0,0,0,0.7)' : '')};
	padding: 7rem 0;
	z-index: 1000;
`;

const BackgroundImage: FunctionComponent<IImageProps> = (props) => {
	return (
		<StyledImage
			id={props.id}
			height={props.height}
			imageUrl={props.imageUrl}
			className="fixed">
			<div className="fixed-wrap">
				<div className="fixed-inner"></div>
			</div>
			<StyledRow className="text-light text-center" dark={props.dark}>
				{props.children}
			</StyledRow>
		</StyledImage>
	);
};

export interface IImageProps extends React.HtmlHTMLAttributes<any> {
	id?: string;
	height: string;
	imageUrl: string;
	dark?: boolean;
	fixed?: boolean;
}

export default BackgroundImage;
