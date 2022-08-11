import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';

import './assets/style/reset.css';
import './assets/style/style.css';
import './assets/style/media.css';

const root = ReactDom.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
