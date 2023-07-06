import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StroreProvider from './context/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StroreProvider>
    <App />
    </StroreProvider>
  </React.StrictMode>
);


