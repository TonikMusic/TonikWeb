import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import LogoNoColor from '../../assets/Logos/MainLogoNoColor.png';
import SearchIcon from '../../assets/Icons/search-icon.png';

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
        <ul className="nav__items_left">
          <NavLink to="/explore">
            <li className="nav__item">Explore</li>
          </NavLink>
          <NavLink to="/learn">
            <li className="nav__item">About</li>
          </NavLink>
        </ul>

        <NavLink to="/">
          <img className="nav__logo" src={LogoNoColor} alt="#" />
        </NavLink>

        <ul className="nav__items_right">
          <NavLink to="/login">
            <li className="nav__item">Log In</li>
          </NavLink>
          <NavLink to="/signup">
            <li className="nav__item">Sign Up</li>
          </NavLink>
          <li>
            <img className="nav__item_search" src={SearchIcon} alt="#" />
          </li>
        </ul>
      </nav>
    );
  }
}
export default Nav;
