import React, { PureComponent } from 'react';

class CodeEditor extends PureComponent {
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
