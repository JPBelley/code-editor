import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Cookies from 'universal-cookie';

class CssTextarea extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.cssCookie = this.cssCookie.bind(this);
  }

  componentDidMount() {
    const cookies = new Cookies();

    let cssCookie = cookies.get('cssCookie') || '';
    let htmlSelector = document.querySelectorAll('#css')[0].value = cssCookie;
  }

  cssCookie() {
    const cookies = new Cookies();
    let htmlSelector = document.querySelectorAll('#css')[0].value;
    cookies.set('cssCookie', htmlSelector, { path: '/' });
  }

  render() {

    return (
        <div className="textarea-code">
          <div className="textarea-title">CSS <span> > </span> </div>
          <textarea id="css" onChange={this.cssCookie}></textarea>
        </div>
    );
  }
}

export default CssTextarea;
