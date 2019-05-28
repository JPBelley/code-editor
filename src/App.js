import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import './App.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Header from './Components/Header/';

import CodeEditor from './Components/Pages/CodeEditor/CodeEditor';
import Homepage from './Components/Pages/Homepage/Homepage';

const client = new ApolloClient();

class App extends Component {

  render() {

    return (
        <ApolloProvider client={client}>
          <div className="App">
            <Header></Header>
            <HashRouter>
              <React.Fragment>
                <Route exact path='/' component={Homepage} />
                <Route path='/editor' component={CodeEditor} />
              </React.Fragment>
            </HashRouter>
          </div>
        </ApolloProvider>
    );
  }
}

export default App;
