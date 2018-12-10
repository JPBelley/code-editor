import React, { PureComponent } from 'react';

class Homepage extends PureComponent {


  render() {
    return (
      <div className="homepage">
        <h1>
          Bienvenue
        </h1>
        <div>
          Le but de la plate-forme est de permettre aux gens d'apprendre à coder à l'aide d'exercices pratiques. C'est pourquoi nous avons comme objectif de se démarquer en offrant des cours où vous pourrez conserver les projets à des fins personnelles. Ainsi, vous batirez votre propre portfolio tout en apprenant à coder.
        </div>

        <div className="card-course">
          <h3>Contruire une landing page</h3>
          <p>Contruisez votre propre landing page étape par étape</p>
          <a href="#">Accédez au cours</a>
        </div>
      </div>
    );
  }
}

export default Homepage;
