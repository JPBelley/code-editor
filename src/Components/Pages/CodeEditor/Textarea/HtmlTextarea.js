import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Cookies from 'universal-cookie';

class HtmlTextarea extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.htmlCookie = this.htmlCookie.bind(this);
  }

  componentDidMount() {
    const cookies = new Cookies();

    let htmlCookie = cookies.get('htmlCookie') || '';
    let htmlSelector = document.querySelectorAll('#html')[0].value = htmlCookie;
  }

  htmlCookie() {
    const cookies = new Cookies();
    let htmlSelector = document.querySelectorAll('#html')[0].value;
    cookies.set('htmlCookie', htmlSelector, { path: '/' });
  }

  render() {

    return (
        <div className="textarea-code">
          <div className="textarea-title">HMTL <span> > </span> </div>
          <textarea id="html" onChange={this.htmlCookie}></textarea>
        </div>
    );
  }
}

export default HtmlTextarea;
