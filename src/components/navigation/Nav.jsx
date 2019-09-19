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
        <ul className="nav__items_container">
          <li>
            <Link to="/">
              <img src={LogoColor} alt="#" />
            </Link>
          </li>
          <li className="nav__item_artists">Artists</li>
          <li className="nav__item_explore">Explore</li>
          <li className="nav__item_about">About</li>
        </ul>
        <div className="nav__search">
          <input type="search" placeholder="Find Artists" />
        </div>
        <div className="nav__buttons_container">
          <button id="nav__buttons_login" type="button">
            Log In
          </button>
          <button id="nav__buttons_signup" type="button">
            Sign Up
          </button>
        </div>
      </nav>
    );
  }
}
export default Nav;
