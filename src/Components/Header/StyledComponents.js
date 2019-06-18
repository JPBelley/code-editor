import styled from 'styled-components';

export const MenuContainer = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;

  li {
    list-style-type: none;
    margin-right: 25px;
  }
  a {
    color: #555B5E;
    font-size: 16px;
    letter-spacing: 1px;
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
  }
`
