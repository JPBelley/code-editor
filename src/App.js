import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import CodeEditor from './Components/Pages/CodeEditor/';
import Homepage from './Components/Pages/Homepage/';

class App extends Component {




  render() {
    return (
      <div className="App">
        <header>
          <ul>
            <li><a href="#">Accueil</a></li>
          </ul>
        </header>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/editor" component={CodeEditor} />
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
