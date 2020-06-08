import React, { useEffect, useRef, HtmlHTMLAttributes } from 'react';

function buildThresholdList(steps: number) {
	let thresholds = [];

	for (let i = 1.0; i <= steps; i++) {
		let ratio = i / steps;
		thresholds.push(ratio);
	}

	thresholds.push(0);
	return thresholds;
}

function createObserver(fadeTarget: string, steps: number) {
	let options = {
		threshold: buildThresholdList(steps),
	};

	return new IntersectionObserver((entries) => {
		const elementsToStyle = Array.from(
			document.getElementsByClassName(fadeTarget) as HTMLCollectionOf<
				HTMLElement
			>
		);
		entries.forEach((entry) => {
			console.log(entry.target);
			elementsToStyle.forEach(
				(element) =>
					(element.style.opacity = entry.intersectionRatio.toString())
			);
		});
	}, options);
}

export const FadeInSection = ({
	fadeTarget = '#FadeInSectionBase',
	steps = 1,
	children,
}: IProps) => {
	const domRef = useRef(null);
	useEffect(() => {
		const observer = createObserver(fadeTarget, steps);
		console.log(observer.thresholds);
		observer.observe(domRef.current!);
		return () => observer.unobserve(domRef.current!);
	}, []);
	return (
		<div
			// className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
			ref={domRef}>
			{children}
		</div>
	);
};

interface IProps extends HtmlHTMLAttributes<any> {
	fadeTarget?: string;
	steps?: number;
	children: any;
}
