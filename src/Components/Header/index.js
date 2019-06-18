import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { MenuContainer } from './StyledComponents'
import { HashRouter, Link } from 'react-router-dom'

class Header extends PureComponent {

  render() {

    return (

      <header>
        <HashRouter>
          <MenuContainer>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/editor">Editeur</Link></li>
          </MenuContainer>
        </HashRouter>
      </header>
    );
  }
}

export default Header;
