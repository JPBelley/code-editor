import React, { PureComponent } from 'react';
import CodeImg from './images/code_img.jpg';
import styled from 'styled-components';
import Mailchimp from './Mailchimp';
import CoinbaseCommerceButton from 'react-coinbase-commerce';
import 'react-coinbase-commerce/dist/coinbase-commerce-button.css';
import { HashRouter, Link } from 'react-router-dom'



class Homepage extends PureComponent {

  render() {
    const ImgCode = styled.img `
      width: 400px;
    `;

    const Hero = styled.div `
      display: flex;
    `;

    const CardLink = styled.a `
      color: black;
    `;

    return (
      <div className="homepage">
        <Hero>
          <div>
            <ImgCode src={CodeImg} alt="" />
          </div>
          <div>
            <h1>
              Bienvenue
            </h1>
            <div>
              Le but de la plate-forme est de permettre aux gens d'apprendre à coder à l'aide d'exercices pratiques. C'est pourquoi nous avons comme objectif de se démarquer en offrant des cours où vous pourrez conserver les projets à des fins personnelles. Ainsi, vous batirez votre propre portfolio tout en apprenant à coder.
            </div>

            <div className="card-course">
              <h3>Contruire une landing page</h3>
              <p>Contruisez votre propre landing page étape par étape</p>
             <Link to="/editor"><CardLink href="/">Accédez au cours</CardLink></Link>
              

            </div>
          </div>
        </Hero>
        <Mailchimp></Mailchimp>
        <CoinbaseCommerceButton checkoutId={'97077c4f-5c42-4236-84bf-14d66972c47e'} >Donate with Bitcoin</CoinbaseCommerceButton>
      </div>
    );
  }
}

export default Homepage;
