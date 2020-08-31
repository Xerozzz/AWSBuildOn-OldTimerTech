import React from 'react';
import { NavLink } from 'react-router-dom'

class Nav extends React.Component {
    render() {
        return(
            <nav>
                <h3>Old Timer Tech</h3>
                <ul>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="../tutorial/tutorialPage">Tutorials</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="../voucher/vouchersPage">Vouchers</NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav;