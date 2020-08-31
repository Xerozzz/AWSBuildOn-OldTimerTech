import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';

import TutorialRow from './tutorialRow';
import Nav from '../global/Nav'

class TutorialPage extends PureComponent {
    static propTypes =
    {
        tutorialData: PropTypes.array
    };

    render() {
        return(
            <div>
                <Nav>

                </Nav>
                <header>
                    <h1>D-D-DISCOMMUNICATION</h1>
                </header>
                <div>
                    {this.props.tutorialData.map(res => {
                        <TutorialRow
                            tutName = {res.tutName}
                            tutProgress = {res.tutProgress}
                            tutTotal = {res.tutTotal}
                            tutCompleted = {res.tutCompleted}
                        />
                    })}

                </div>
            </div>
        )
    }
}

export default TutorialPage;