import React, { FunctionComponent } from 'react';
import { Button, ButtonProps } from 'reactstrap';
import styled from 'styled-components';

const StyledButton = styled(Button)`
	/* These Styles are ovewritten by the Reaactstrap classes in the case of everything but colors I hope */
	&&& {
		&.small {
			text-transform: uppercase;
			padding: 0.5rem 1.1rem;
			font-size: 0.9rem;
			margin: 1rem;
		}
		border-radius: ${(props) => props.square && '0px'};
		background-color: ${(props) => {
			if (props.themePrimary) return props.theme.primary;
			if (props.themeSecondary) return props.theme.secondary;
		}};
		border-color: ${(props) => {
			if (props.themePrimary) return props.theme.primary;
			if (props.themeSecondary) return props.theme.secondary;
		}};
	}
`;

export const StylableButton: FunctionComponent<any> = (
	props: IStylableButtonProps
) => <StyledButton {...props}>{props.children}</StyledButton>;

interface IStylableButtonProps extends ButtonProps {
	themePrimary?: boolean;
	themeSecondary?: boolean;
	square: boolean;
}
