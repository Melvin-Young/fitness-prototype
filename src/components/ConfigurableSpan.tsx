import React, { FunctionComponent, HtmlHTMLAttributes } from 'react';

export const ConfigurableSpan: FunctionComponent<ISpanProps> = ({
	id = '',
	onClick,
	children,
	className,
}) => {
	return (
		<span id={id} onClick={onClick} className={className}>
			{children}
		</span>
	);
};

export interface ISpanProps extends HtmlHTMLAttributes<any> {
	id?: string;
	onClick?: () => void;
	children: FunctionComponent | string;
}
