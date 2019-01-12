import React from 'react';
import { render } from 'react-dom'

import './stylesheets/index.scss';
// import './stylesheets/theme/fonts/nucleo.ttf';

import { ToastContainer } from 'react-toastify';

import TodoList from './pages/TodoList';
import AppLayout from './layouts/AppLayout';

import * as serviceWorker from './utils/serviceWorker';

render((
  <AppLayout>
    <TodoList />
    <ToastContainer />
  </AppLayout>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
