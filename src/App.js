import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    var html = document.getElementById("html");
    var css = document.getElementById("css");
    var js = document.getElementById("js");
    var code = document.getElementById("code").contentWindow.document;

    document.body.onkeyup = function() {
      code.open();
      code.writeln(
        html.value +
          "<style>" +
          css.value +
          "</style>" +
          "<script>" +
          js.value +
          "</script>"
      );
      code.close();
    };
  }


  render() {
    return (
      <div className="App">
        <div className="editor-interface">
          <div className="instructions">
            <h1>Instructions</h1>
            <h2>Styliser un élément à l'aide d'une classe</h2>
            <ul>
              <li>Créer une balise div dans la section HTML</li>
              <li></li>
            </ul>
          </div>
          <div className="code-inputs">
            <textarea id="html" placeholder="HTML"></textarea>
            <textarea id="css" placeholder="CSS"></textarea>
            <textarea id="js" placeholder="JavaScript"></textarea>
          </div>
        </div>
        <div>
          <iframe id="code"></iframe>
        </div>
      </div>
    );
  }
}

export default App;
