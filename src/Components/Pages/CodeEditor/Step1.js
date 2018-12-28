import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { HashRouter, Link } from 'react-router-dom'

class Step1 extends PureComponent {

  render() {

    return (

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
    );
  }
}

export default Step1;
