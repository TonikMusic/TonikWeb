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
          <img src={LogoColor} alt="#" />
        </div>

        <div className="nav__items_right">
          <div className="nav__item_login" role="button">
            <NavLink to={{ pathname: '/login', state: { loginModal: true } }}>Log In</NavLink>
          </div>
          <div className="nav__item_signup" role="button">
            <NavLink to={{ pathname: '/signup', state: { signupModal: true } }}>Sign Up</NavLink>
          </div>
          <img src={SearchIcon} alt="#" className="nav__item_search" />
        </div>
      </nav>
    );
  }
}
export default Nav;
