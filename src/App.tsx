import React, { Fragment } from 'react';
// import './App.scss';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

// const style = {
// 	backgroundColor: 'grey',
// 	height: '1000px',
// };

const StyledCol = styled(Col)`
	&&& {
		background-color: grey;
		height: 5rem;
		border: 0.1rem solid white;
	}
`;
function App() {
	return (
		<Fragment>
			<Container fluid className="py-5">
				<Row>
					<StyledCol lg={4}>Hello</StyledCol>
					<StyledCol lg={4}>Hello</StyledCol>
					<StyledCol lg={4}>Hello</StyledCol>
				</Row>
			</Container>
			<Container fluid className="py-5">
				<Row>
					<StyledCol sm={6} md={4} lg={2} xl={1}></StyledCol>
					<StyledCol sm={6} md={4} lg={2} xl={1}></StyledCol>
					<StyledCol sm={6} md={4} lg={2} xl={1}></StyledCol>
					<StyledCol sm={6} md={4} lg={2} xl={1}></StyledCol>
					<StyledCol sm={6} md={4} lg={2} xl={1}></StyledCol>
					<StyledCol sm={6} md={4} lg={2} xl={1}></StyledCol>
					<StyledCol sm={6} md={4} lg={2} xl={1}></StyledCol>
					<StyledCol sm={6} md={4} lg={2} xl={1}></StyledCol>
					<StyledCol sm={6} md={4} lg={2} xl={1}></StyledCol>
					<StyledCol sm={6} md={4} lg={2} xl={1}></StyledCol>
					<StyledCol sm={6} md={4} lg={2} xl={1}></StyledCol>
					<StyledCol sm={6} md={4} lg={2} xl={1}></StyledCol>
				</Row>
			</Container>
		</Fragment>
	);
}

export default App;
