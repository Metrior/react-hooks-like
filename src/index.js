import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import {state} from "./store/store"

ReactDOM.render(<Provider store={state}><App/></Provider>, document.getElementById('root'));

serviceWorker.unregister();
