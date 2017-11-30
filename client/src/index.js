import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { Provider } from 'react-redux';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';
import store from './store';

ReactDOM.render(
<Provider store={store}>
  <Routes />
</Provider>,
document.getElementById('root'));
registerServiceWorker();
