import * as React from 'react';

export const ConfigurableSpan: React.FunctionComponent<ISpanProps> = ({
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
	children: any;
}
