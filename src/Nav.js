import React from "react";
import {Link} from "react-router-dom";
import "./Nav.css";

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul id="mainMenu">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/PropContainer">
            <li>Props</li>
          </Link>
          <Link to="/LifeCycle">
            <li>Lifecycle</li>
          </Link>
          <Link to="/UseStateHook">
            <li>useState Hook</li>
          </Link>
        </ul>
      </nav>
    )
  }
}

export default Nav;