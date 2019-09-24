/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './Signup.css';

class Signup extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="signup__container">
        <form>
          <ul className="signup__fields">
            <li>
              <label htmlFor="full_name">Full Name</label>
              <input type="text" id="full_name" placeholder="Enter Full Name" />
            </li>
            <li>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="Enter Username" />
            </li>
            <li>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" placeholder="Enter Email" />
            </li>
            <li>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter Password" />
            </li>
            <li>
              <label htmlFor="confirm_password">Confirm Password</label>
              <input type="password" id="password" placeholder="Confirm Password" />
            </li>
            <li>
              <label htmlFor="birth_date">Birthday</label>
              <input type="date" id="birth_date" placeholder="Enter Birthdate" />
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

export default Signup;
