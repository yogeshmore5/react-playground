import React from "react";
import {Link} from "react-router-dom";


class Nav extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/LifeCycle">
            <li>Lifecycle</li>
          </Link>
          <Link to="/PropContainer">
            <li>Props</li>
          </Link>
        </ul>
      </div>
    )
  }
}

export default Nav;