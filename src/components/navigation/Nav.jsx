import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import LogoColor from '../../assets/Logos/MainLogoNoColor.png';
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
        <div className="nav__items_left">
          <div className="nav__item_explore">Explore</div>
          <div className="nav__item_about">About</div>
        </div>

        <div className="nav__logo">
          <NavLink to="/">
            <img src={LogoColor} alt="#" />
          </NavLink>
        </div>

        <div className="nav__items_right">
          <NavLink to="/login">
            <div className="nav__item_login" role="button">
              Log In
            </div>
          </NavLink>
          <NavLink to="/signup">
            <div className="nav__item_signup" role="button">
              Sign Up
            </div>
          </NavLink>
          <img src={SearchIcon} alt="#" className="nav__item_search" />
        </div>
      </nav>
    );
  }
}
export default Nav;
