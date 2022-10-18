import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/common/App';
import { Menu } from './components/common/Menu';
import { GlobalStyle } from './style/global';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.Fragment>
    <GlobalStyle /> 
    <App />
    <Menu />
  </React.Fragment>
);