import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import * as serviceWorker from './service-worker';
import reportWebVitals from './reportWebVitals';
import * as atatus from 'atatus-spa';

atatus.config('d3f9ca6564994232a305cdad080686c9').install();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

serviceWorkerRegistration.register();
// serviceWorker.register();

reportWebVitals();
