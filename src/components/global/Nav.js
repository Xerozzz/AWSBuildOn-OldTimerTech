import React from 'react';
import { NavLink, HashRouter as Router } from 'react-router-dom'

class Nav extends React.Component {
    render() {
        return(
            <nav>
                <NavLink to="/tutorialPage">Tutorials Pagse</NavLink>
            </nav>
        )
    }
}

export default Nav;