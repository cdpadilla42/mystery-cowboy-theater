import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import TheaterPicker from './components/TheaterPicker';

ReactDOM.render(
  <React.StrictMode>
    <TheaterPicker />
  </React.StrictMode>,
  document.getElementById('root')
);
