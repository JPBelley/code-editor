import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Header from './Components/Header/';

import CodeEditor from './Components/Pages/CodeEditor/CodeEditor';
import Homepage from './Components/Pages/Homepage/Homepage';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Header></Header>
        <HashRouter>
          <React.Fragment>
            <Route exact path='/' component={Homepage} />
            <Route path='/editor' component={CodeEditor} />
          </React.Fragment>
        </HashRouter>
      </div>
    );
  }
}

export default App;
