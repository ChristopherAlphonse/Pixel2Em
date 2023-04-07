import './index.css';

import React, { StrictMode } from 'react';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
