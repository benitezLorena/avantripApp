import React from "react";
import {render} from "react-dom";
import App from './components/App';

import { ApolloProvider } from '@apollo/react-hooks';

import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/cjtk3okib547g0182680rna24',
});

const css = require('./index.scss');

const AppMain = () => (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
  );

  render(
    <>
     <AppMain />
    </>,
    document.getElementById('app')
);

/*render(
    <>
        <App />
    </>,
    document.getElementById('app')
);*/