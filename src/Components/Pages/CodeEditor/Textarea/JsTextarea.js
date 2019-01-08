import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Cookies from 'universal-cookie';

class JsTextarea extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.jsCookie = this.jsCookie.bind(this);
  }

  componentDidMount() {
    const cookies = new Cookies();

    let jsCookie = cookies.get('jsCookie') || '';
    let htmlSelector = document.querySelectorAll('#js')[0].value = jsCookie;
  }

  jsCookie() {
    const cookies = new Cookies();
    let htmlSelector = document.querySelectorAll('#js')[0].value;
    cookies.set('jsCookie', htmlSelector, { path: '/' });
  }

  render() {

    return (
      <div className="textarea-code">
        <div className="textarea-title">JavaScript <span> > </span> </div>
        <textarea id="js" onChange={this.jsCookie}></textarea>
      </div>
    );
  }
}

export default JsTextarea;
