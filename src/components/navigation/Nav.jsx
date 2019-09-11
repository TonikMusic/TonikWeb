import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import LogoColor from '../../assets/MainLogoColor.png';

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
          <ul className="nav_items">
            <Link to="/">
              <img src={LogoColor} alt="#" />
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Nav;
