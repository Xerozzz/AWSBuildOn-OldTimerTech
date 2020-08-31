import React from "react";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <h3>Old Timer Tech</h3>
        <ul className="nav-link">
          <li className="nav-item">
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/tutorial">
              Tutorials
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/voucher">
              Vouchers
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
