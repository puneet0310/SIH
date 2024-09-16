import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { JPContextProvider } from './Context/JPContext';
import { JSContextProvider } from './Context/JSContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <JSContextProvider>
      <JPContextProvider>
    <App />
    </JPContextProvider>
    </JSContextProvider>
  </React.StrictMode>
);