import React, { PureComponent } from 'react';
import Steps from './Steps';
import Step1 from './Step1';
import Step2 from './Step2';

// Textarea
import HtmlTextarea from './Textarea/HtmlTextarea';
import CssTextarea from './Textarea/CssTextarea';
import JsTextarea from './Textarea/JsTextarea';

class CodeEditor extends PureComponent {
  componentDidMount() {
    var html = document.getElementById("html");
    var css = document.getElementById("css");
    var js = document.getElementById("js");
    var code = document.getElementById("code").contentWindow.document;

    this.writeCode(html, css, js, code);
    document.body.onkeyup = () => this.writeCode(html, css, js, code);

    // Use tab to indent in textarea
    var textareas = document.getElementsByTagName('textarea');
    var count = textareas.length;
    for(var i=0;i<count;i++){
      textareas[i].onkeydown = function(e){
        if(e.keyCode==9 || e.which==9){
          e.preventDefault();
          var s = this.selectionStart;
          this.value = this.value.substring(0,this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
          this.selectionEnd = s+1;
        }
      }
    }
  }

  // Write inside the iFrame function
  writeCode = (html, css, js, code) =>  {
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
  }

  render() {
    return (
      <div>
        <div className="editor-interface">
          <div className="instructions">
            <Steps></Steps>
          </div>
          <div className="code-inputs">
            <HtmlTextarea></HtmlTextarea>
            <CssTextarea></CssTextarea>
            <JsTextarea></JsTextarea>
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
