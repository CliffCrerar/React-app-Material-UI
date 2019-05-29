/**
 * REACT MUI BOILER
 * @author Cliff Crerar
 * Created at     : 2019-02-07 00:49:09
 * Last modified  : 2019-02-07 00:49:24
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();