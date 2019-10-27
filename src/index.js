import React from "react";
import {render} from "react-dom";

import App from './components/App';

const css = require('./index.scss');
render(
    <div>
        <h1>Hello React</h1>
        <App />
    </div>,
    document.getElementById('app')
);