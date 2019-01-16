import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { HashRouter, Link } from 'react-router-dom'

class Steps extends PureComponent {
  state = {
    step: 0
  }

  changeStepBackward = (e) => {
    e.preventDefault();

    if(this.state.step > 0) {
      this.setState({
        step: this.state.step - 1
      });
    }
  }

  changeStepForward = (e) => {
    e.preventDefault();
    this.setState({
      step: this.state.step + 1
    });
  }

  render() {
    let steps = null;

    if(this.state.step === 0) {
      steps = (
        <div>
          <h1>Instructions</h1>
          <h2>Écrire en HTML</h2>
          <ul>
            <li>Pour commencer l'exercice, vous allez vous familiariser avec les &lt;div&gt;. Les &lt;div&gt; sont des boites qui permettent d'entourer le contenu afin de le styliser.</li>
            <li>Comme premier exercice, donnez vie à votre première &lt;div&gt;. Dans l'espace HTML écrivez le code suivant :<br />
              <div className="code-wrapper">
                <code>
                &lt;div&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Bonjour<br />
                &lt;/div&gt;<br />
                </code>
              </div>
            </li>
            <li>Ensuite, afin de prendre conscience de votre &lt;div&gt;, ajoutez lui une couleur de fond. Pour y arriver, aller dans l'onglet CSS et donnez à votre div la propriété "background" de couleur verte. Ex:</li>
            <li>
              <div className="code-wrapper">
                <code>
                div &#123;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;background: green;<br />
                &#125;<br />
                </code>
              </div>
            </li>
          </ul>
        </div>
      )
    }

    if(this.state.step === 1) {
      steps = (
        <div>
          <h1>Instructions</h1>
          <h2>Initialiser les styles par défault des navigateurs. </h2>
          <ul>
            <li>Comme vous pouvez le réaliser, il y a un espace blanc autour de votre &lt;/div&gt;, c'est ainsi puisque les navigateurs proposent quelques styles par défaults. Quand on fait notre propre site web, on veut souvent avoir le contrôle sur le plus d'élément possible. Alors, on enlève régulièrement ces styles ainsi :</li>
            <li>À l'aide du tag html et body, mettre l'élement "margin" et "padding" à 0 dans la section CSS afin qu'il n'y ait pas d'espace blanc sur votre page web.</li>
            <li>Voici comment initialiser les styles:<br />
              <div className="code-wrapper">
                <code>
                html, <br />
                body &#123;<br />
                	&nbsp;&nbsp;&nbsp;&nbsp;margin: 0;<br />
                	&nbsp;&nbsp;&nbsp;&nbsp;padding: 0;<br />
                &#125;<br />
                </code>
              </div>
            </li>
          </ul>
        </div>
      )
    }

    if(this.state.step === 2) {
      steps = (
        <div>
          <h1>Instructions</h1>
          <h2>Créer une banière "hero"</h2>
          <ul>
            <li>Créer une balise div dans la section HTML, ajoutez lui une class égale à hero et entrez le nom de votre siteweb<br /> Ex : <br />
              <div className="code-wrapper">
                <code>
                  &lt;div class="hero"&gt; Titre &lt;/div&gt;
                </code>
              </div>
            </li>
            <li>Ajouter une photo en background. (Conseil: Aller sur https://source.unsplash.com/ et choisir une photo ou le lien random.)</li>
            <li>Pour ajouter la photo en background, vous devez entrer dans le css le nom de la classe suivi des propriétés que vous aimeriez appliqué à votre div. Ex:<br />
              <div className="code-wrapper">
                <code>.hero &#123;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;background-image: url('https://source.unsplash.com/random');<br />
                  &#125;<br />
                </code>
              </div>
            </li>
            <li>
              Afin de bien voir votre image, ajouter la propriété height: 100vh; à votre css pour la classe .hero. Ainsi, l'image prendra toujours 100% de la hauteur du navigateur web.
            </li>
          </ul>
        </div>
      )
    }


    return (

      <div>
        {steps}
        <div className="arrow-container">
          <a  href="#"
              className="right-arrow"
              onClick={(e) => this.changeStepBackward(e)}> &lt;--- Précédent </a>
          <a  href="#"
              className="right-arrow"
              onClick={(e) => this.changeStepForward(e)}> Suivant ---&gt;</a>
        </div>
      </div>
    );
  }
}

export default Steps;
