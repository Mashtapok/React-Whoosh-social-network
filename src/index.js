import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WhooshApp from "./App";

ReactDOM.render(<WhooshApp/>, document.getElementById('root'));

serviceWorker.unregister();
