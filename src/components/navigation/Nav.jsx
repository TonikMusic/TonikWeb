import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import LogoColor from '../../assets/Logos/MainLogoNoColor.png';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      // loggedIn: false,
      // isArtist: false,
    };
  }

  render() {
    return (
      <nav>
        <ul>
          <li>Explore</li>
          <li className="seperator" />
          <li>About</li>
        </ul>

        <div className="nav_search">
          <img src={LogoColor} alt="#" />
        </div>

        <ul>
          <li>Log In</li>
          <li className="seperator" />
          <li>Sign Up</li>
        </ul>
      </nav>
    );
  }
}
export default Nav;
