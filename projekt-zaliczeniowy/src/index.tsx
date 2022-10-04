import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import TestComponent from './components/TestComponent';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.Fragment>
    <App />
    <TestComponent />
  </React.Fragment>
);