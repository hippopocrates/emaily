import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="brand-logo left">emaily</a>
          <ul className="right">
            <li>
              <a>login with google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
