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
              <input type="text" id="full_name" placeholder="Enter Your Full Name" />
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

export default Signup;
