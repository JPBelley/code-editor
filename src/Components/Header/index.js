import React, { PureComponent } from 'react';
import styled from 'styled-components';

class Header extends PureComponent {

  render() {
    const MenuContainer = styled.ul`
      display: flex;
    `
    const MenuItem = styled.a`
      color: #fff;
      text-transform: uppercase;
      text-decoration: none;
      position: relative;
      font-weight: 100;
      transition: 0.3s;

      &::after {
        content: "";
        position: absolute;
        left: 0; bottom: -4px; right: 0;
        background: #fff;
        width: 0;
        height: 1px;
        transition: 0.3s;
        margin: 0 auto;
      }

      &:hover {
        opacity: 0.7;

        &::after {
          width: 100%;
        }
      }
    `

    return (

      <header>
        <MenuContainer>
          <li><MenuItem href="#">Accueil</MenuItem></li>
          <li><MenuItem href="#">Editor</MenuItem></li>
        </MenuContainer>
      </header>
    );
  }
}

export default Header;
