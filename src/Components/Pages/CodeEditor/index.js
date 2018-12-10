import React, { PureComponent } from 'react';

class CodeEditor extends PureComponent {
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
      <div>
        <div className="editor-interface">
          <div className="instructions">
            <h1>Instructions</h1>
            <h2>Initialiser les styles par défault des navigateurs</h2>
            <ul>
              <li>À l'aide du tag html et body, mettre l'élement "margin" et "padding" à 0 dans la section CSS afin qu'il n'y ait pas d'espace blanc sur votre page web</li>
              <li></li>
            </ul>
            <h2>Créer une banière "hero"</h2>
            <ul>
              <li>Créer une balise header dans la section HTML</li>
              <li></li>
            </ul>
          </div>
          <div className="code-inputs">
            <div className="textarea-code">
              <div className="textarea-title">HMTL</div>
              <textarea id="html"></textarea>
            </div>
            <div className="textarea-code">
              <div className="textarea-title">CSS</div>
              <textarea id="css"></textarea>
            </div>
            <div className="textarea-code">
              <div className="textarea-title">JavaScript</div>
              <textarea id="js"></textarea>
            </div>
          </div>
        </div>
        <div>
          <iframe id="code"></iframe>
        </div>
      </div>
    );
  }
}

export default CodeEditor;