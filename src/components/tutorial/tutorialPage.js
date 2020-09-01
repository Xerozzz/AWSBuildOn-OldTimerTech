import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';

import TutorialRow from './tutorialRow';
import TutorialPlatform from './tutorialPlatform';
import Nav from '../global/Nav'
import './tutorials.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap';

import { createBrowserHistory } from 'history';

export default class TutorialPage extends PureComponent {

    constructor(props)
    {
        super(props);
        // createBrowserHistory.( location => {
        //     console.log('location: ' + location);
        // });
        console.log('test');
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
                },
                {
                    tutName: 'sampleData32',
                    tutProgress: '12',
                    tutTotal: '243',
                    tutCompleted: false
                }
            ]
        
        }
        console.log(this.state.tutorialData);
    }
    
    checkData(test)
    {
        console.log(test);
    }

    componentDidUpdate(prevProps)
    {
        console.log("componentDidUpdate() fired");
    }

    render() {
        console.log(this.state.tutorialData);
        console.log(window.location.pathname);
        return(
            <div style={{height: '100vh'}}>
                <Container fluid style={{height: '100vh'}}>
                    <Row>
                            <h1 onClick={() => this.checkData(this.state.tutorialData)}>D-D-DISCOMMUNICATION</h1>
                    </Row>
                    <Row noGutters className="nowhite" style={{height: '100%'}} >
                        <Col xs = {4} sm = {4} md={4} lg={4} xl={4}>
                            <div className="sidebar" style={{height: '100%'}} >
                                {this.state.tutorialData.map(res => (
                                    <TutorialRow
                                        key = {res.tutName}
                                        tutName = {res.tutName}
                                        tutProgress = {res.tutProgress}
                                        tutTotal = {res.tutTotal}
                                        tutCompleted = {res.tutCompleted}
                                    />
                                ))}
                            </div>
                        </Col>
                        <Col xs = {8} sm = {8} md={8} lg={8} xl={8}>
                            <TutorialPlatform tutID={window.location.pathname.replace("/tutorialspage/", "")}/>
                        </Col>
                    </Row>    
                </Container>
            </div>
        )
    }
}