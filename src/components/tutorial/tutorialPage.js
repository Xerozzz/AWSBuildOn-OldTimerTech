import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';

import TutorialRow from './tutorialRow';
import Nav from '../global/Nav'

export default class TutorialPage extends PureComponent {

    constructor(props)
    {
        super(props);
        this.state = {
            tutorialData: 
            [
                {
                    tutName: 'tutorialName1',
                    tutProgress: '1',
                    tutTotal: '2',
                    tutCompleted: true
                },
                {
                    tutName: 'sampleData',
                    tutProgress: '1',
                    tutTotal: '2',
                    tutCompleted: true
                },
                {
                    tutName: 'sampleData2',
                    tutProgress: '1',
                    tutTotal: '24',
                    tutCompleted: false
                }
            ]
        
        }
    }

    render() {
        return(
            <div>
                <Nav>

                </Nav>
                <header>
                    <h1>D-D-DISCOMMUNICATION</h1>
                </header>
                <div>
                    {this.state.tutorialData.map(res => (
                        <TutorialRow
                            tutName = {res.tutName}
                            tutProgress = {res.tutProgress}
                            tutTotal = {res.tutTotal}
                            tutCompleted = {res.tutCompleted}
                        />
                    ))}

                </div>
            </div>
        )
    }
}