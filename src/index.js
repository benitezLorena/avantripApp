import React from "react";
import {render} from "react-dom";
import App from './components/App';

const css = require('./index.scss');

render(
    <>
        <App />
    </>,
    document.getElementById('app')
);