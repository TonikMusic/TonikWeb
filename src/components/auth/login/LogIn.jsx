/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './Login.css';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="login__container">
        <form>
          <h1>Log In</h1>
          <ul className="login__fields">
            <li>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" placeholder="Email" />
            </li>
            <li>
              <label htmlFor="password">Password</label>
              <input type="text" id="password" placeholder="Password" />
            </li>
            <li>
              <button type="submit">Log In</button>
            </li>
          </ul>
          <p>
            Don't have an account yet?
            <span>Sign Up!</span>
          </p>
        </form>
      </div>
    );
  }
}

export default Login;
