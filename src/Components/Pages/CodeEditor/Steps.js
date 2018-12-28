import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { HashRouter, Link } from 'react-router-dom'

class Steps extends PureComponent {
  state = {
    step: 0
  }

  changeStepBackward = (e) => {
    e.preventDefault();
    this.setState({
      step: this.state.step - 1
    });
  }

  changeStepForward = (e) => {
    e.preventDefault();
    this.setState({
      step: this.state.step + 1
    });
  }

  render() {
    let steps = null;

    if(this.state.step === 1) {
      steps = (
        <div>
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
      )
    }

    if(this.state.step === 2) {
      steps = (
        <div>
          <h1>Instructions</h1>
          <h2>2e Étape</h2>
          <ul>
            <li></li>
          </ul>
          <h2>Créer une titre</h2>
          <ul>
            <li></li>
          </ul>
        </div>
      )
    }

    return (

      <div>
        {steps}
        <a  href="#"
            className="right-arrow"
            onClick={(e) => this.changeStepBackward(e)}> Back -- </a>
        <a  href="#"
            className="right-arrow"
            onClick={(e) => this.changeStepForward(e)}> -- Next </a>
      </div>
    );
  }
}

export default Steps;
