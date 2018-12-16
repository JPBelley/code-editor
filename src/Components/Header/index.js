import React, { PureComponent } from 'react';

class Header extends PureComponent {

  render() {
    // const Image = withLink(styled.li`
    //   color: #fff;
    //   `);

    return (

      <header>
        <ul>
          <li><a href="#">Accueil</a></li>
        </ul>
      </header>
    );
  }
}

export default Header;
