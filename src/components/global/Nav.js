import React from "react";
import { NavLink } from "react-router-dom";
import SignOutButton from "./SignOutButton"

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <h3>Old Timer Tech</h3>
        <ul className="nav-link">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
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
          <li className="nav-item nav-right">
            <SignOutButton />
          </li>
        </ul>
      </nav>
    );
  }
}

// class Nav extends React.Component {
//   render() {
//     return (
//       <Row>
//         <Col xs={6} sm={6} md={6} lg={6} xl={6}>Old Timer Tech</Col>
//         <Col xs={6} sm={6} md={6} lg={6} xl={6} className="nav-link">
//           <Col className="nav-item" xs={4} sm={4} md={4} lg={4} xl={4}>
//             <NavLink className="nav-link" to="/home">
//               Home
//             </NavLink>
//           </Col>
//           <Col className="nav-item" xs={4} sm={4} md={4} lg={4} xl={4}>
//             <NavLink className="nav-link" to="/tutorial">
//               Tutorials
//             </NavLink>
//           </Col>
//           <Col className="nav-item" xs={4} sm={4} md={4} lg={4} xl={4}>
//             <NavLink className="nav-link" to="/voucher">
//               Vouchers
//             </NavLink>
//           </Col>
//         </Col>
//       </Row>
//     );
//   }
// }

export default Nav;
