import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ChatWindow from './ChatWindow'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ChatWindow />, document.getElementById('root'));
registerServiceWorker();
