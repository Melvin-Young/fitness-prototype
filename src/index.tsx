import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import SimpleReactLightbox from 'simple-react-lightbox';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

const theme = {
	// blue grey
	primary: '#505962',
	// Aqua
	secondary: '#1ebba3',
	transparentBlack: 'rgba(0, 0, 0, 0.7)',
};
ReactDOM.render(
	<React.StrictMode>
		<SimpleReactLightbox>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</SimpleReactLightbox>
	</React.StrictMode>,
	document.getElementById('root')
);
