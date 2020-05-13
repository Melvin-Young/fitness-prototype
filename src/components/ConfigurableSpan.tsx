import React, { FunctionComponent } from 'react';

export const ConfigurableSpan: FunctionComponent<ISpanProps> = ({
	id = '',
	onClick,
	children,
}) => {
	return (
		<span id={id} onClick={onClick}>
			{children}
		</span>
	);
};

export interface ISpanProps {
	id?: string;
	onClick?: () => void;
	children: FunctionComponent | string;
}
