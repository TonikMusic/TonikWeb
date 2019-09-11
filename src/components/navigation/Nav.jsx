import React from 'react';
import './Nav.css';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      isArtist: false,
    };
  }

  render() {
    return (
      <div className="nav_container">
        <nav>
          <div className="left_menu" />
        </nav>
      </div>
    );
  }
}
export default Nav;
