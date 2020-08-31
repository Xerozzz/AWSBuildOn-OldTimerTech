import React from 'react';
import { NavLink } from 'react-router-dom'

class Nav extends React.Component {
    render() {
        return(
            <nav>
                <h3>Old Timer Tech</h3>
                <ul>
                    <li>
                        <NavLink to="/tutorial">Tutorials</NavLink>
                    </li>
                    <li>
                        <NavLink to="/voucher"></NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav;