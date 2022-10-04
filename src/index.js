import React from 'react'; //react downloaded from 'react' package that I hve downloaded
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // "./" means - within the folder. "../" is one folder up


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

