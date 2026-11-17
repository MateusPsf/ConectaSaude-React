import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './styles.css';

// HashRouter mantém as cinco páginas acessíveis em hospedagens estáticas.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><HashRouter><App /></HashRouter></React.StrictMode>,
);
