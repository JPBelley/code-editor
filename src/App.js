import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Header from './Components/Header/';

import CodeEditor from './Components/Pages/CodeEditor/';
import Homepage from './Components/Pages/Homepage/';

class App extends Component {

  render() {
    return (
      <div className="App" basename="/code-editor">
        <Header></Header>
        <BrowserRouter>
          <React.Fragment>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Homepage} />
            <Route path={process.env.PUBLIC_URL + '/editor'} component={CodeEditor} />
          </React.Fragment>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
