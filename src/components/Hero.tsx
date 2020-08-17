import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledImage = styled('div')<IImageProps>`
	&.landing {
		position: relative;
		width: 100%;
		height: ${(props) => props.height};
		display: table;
		/* this breaks buttons for some reason, need to fix for mobile */
		z-index: -1;
		& > .hero-wrap {
			clip: rect(0 auto auto 0);
			position: absolute;
			width: inherit;
			height: 100%;
			top: 0;
			left: 0;
			/* Helps with background image light and dark styling */
			/* z-index: 0; */

			& > .hero-inner {
				background-image: url(${(props) => props.imageUrl});
				position: fixed;
				height: 100%;
				width: 100%;
				background-size: cover;
				background-position: center;
				-webkit-transform: 'translateZ(0)';
				transform: 'translateZ(0)';
				will-change: transform;
				display: table;
				top: 0;
				left: 0;
			}
			& > .content {
				position: relative;
				height: ${(props) => props.height};
			}
		}
	}
`;
const Hero: FunctionComponent<IImageProps> = (props) => {
	return (
		<StyledImage
			id={props.id}
			height={props.height}
			imageUrl={props.imageUrl}
			className="landing">
			<div className="hero-wrap">
				<div className="hero-inner"></div>
			</div>
			<div className="content">{props.children}</div>
		</StyledImage>
	);
};

export interface IImageProps extends React.HtmlHTMLAttributes<any> {
	id?: string;
	height: string;
	imageUrl: string;
}

export default Hero;
