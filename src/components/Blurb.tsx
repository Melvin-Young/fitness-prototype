import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { StylableButton } from '../components/StyledButton';

const Blurb = () => (
	<Container fluid>
		<Row className="text-center py-4 justify-content-center">
			<Col xs={11} md={10} lg={9}>
				<h1>Nuno Responsive Bootstrap Theme</h1>
				<p className="lead">
					React is an open-source front-end library that adds Bootstrap
					components to a React App. This website is built primarily with
					Reactstrap, Styled Components and Animated.
				</p>
				<StylableButton
					square
					className="small"
					// color="secondary"
					size="sm"
					href="#contact">
					Request A Quote
				</StylableButton>
				<StylableButton
					className="small"
					themeSecondary
					square
					size="sm"
					href="#contact">
					See Our Portfolio
				</StylableButton>
			</Col>
		</Row>
	</Container>
);

export default Blurb;
