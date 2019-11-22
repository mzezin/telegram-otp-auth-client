/* eslint-disable no-underscore-dangle */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import 'antd/dist/antd.css';

import initStore from './store';
import App from './components/App';

render(React.createElement(Provider, { store: initStore() }, React.createElement(App)), document.getElementById('root'));
