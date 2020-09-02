import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import TutorialRow from './tutorialRow';
import TutorialPagePart from './tutorialPagePart'
// import './tutorials.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap';

import { createBrowserHistory } from 'history';

export default class TutorialPlatform extends PureComponent {

    static propTypes =
    {
        tutID: PropTypes.string
    };

    constructor(props)
    {
        super(props);
        console.log('tutID: ' + this.props.tutID);
        // placeholder data
        this.state = {
            mTutorialName: "",
            mTutorialDescription: "",
            mTutorialHref: "",
            tutID: this.props.tutID,
            tutAuthor: "Teacher's Tech",
            tutorials:
            [
                {
                    tutorialName: "Microsoft Excel Tutorial - Beginners Level 1",
                    tutorialDescription: "Microsoft Excel is a powerful spreadsheet tool that is part of Microsoft Office. This is the first part of a detailed beginners tutorial.",
                    tutorialHref: "https://www.youtube.com/embed/k1VUZEVuDJ8"
                },
                {
                    tutorialName: "Microsoft Excel Tutorial - Beginners Level 2",
                    tutorialDescription: "Microsoft Excel is a powerful spreadsheet tool that is part of Microsoft Office. This is the second part of a detailed beginners tutorial.",
                    tutorialHref: "https://www.youtube.com/embed/bhZckWTLkJM"
                },
                {
                    tutorialName: "Microsoft Excel Tutorial - 10 Best Excel Tips for Beginners",
                    tutorialDescription: "This is a compilation of the 10 Best Excel Tips for Beginners.",
                    tutorialHref: "https://www.youtube.com/embed/ZthlSLYc5UQ"
                }

            ]
        }
        // this.state = {
        //     mTutorialName: "",
        //     mTutorialDescription: "",
        //     mTutorialHref: "",
        //     tutID: this.props.tutID,
        //     tutAuthor: "PEKOPEKOPEKOPEKO",
        //     tutorials:
        //     [
        //         {
        //             tutorialName: "KORO FUNK",
        //             tutorialDescription: "Yubi Yubi Yubi Yubi",
        //             tutorialHref: "https://www.youtube.com/embed/lKEqU2itOiw"
        //         },
        //         {
        //             tutorialName: "Shirakami Fubuki Scatman",
        //             tutorialDescription: "Beat up a pineapple",
        //             tutorialHref: "https://www.youtube.com/embed/ZKiDOLr100k"
        //         },
        //         {
        //             tutorialName: "Discommunication Alien",
        //             tutorialDescription: "D-D-Discommunication",
        //             tutorialHref: "https://www.youtube.com/embed/AAr2lHZLNyU"
        //         }
        //     ]
        // }
    }

    changeTut(item)
    {
        console.log('changeTut(item) called with item name: ' + item.tutorialName);
        this.state.mTutorialName = item.tutorialName;
        this.state.mTutorialDescription = item.tutorialDescription;
        this.state.mTutorialHref = item.tutorialHref;
        console.log('this.tutorialHTML: ' + this.state.tutorialHTML);
        this.setState(this.state);
        this.forceUpdate();
        if (document.getElementById(this.state.mTutorialName) != null)
        {
            document.getElementById(this.state.mTutorialName).setAttribute('style','background-color: red;');
        }
        
    }

    render()
    {
        if (this.state.mTutorialName === "")
        {
            // at init, none selected...
            console.log('changeTut to 0...');
            this.changeTut(this.state.tutorials[0]);
        }
        // console.log(this.props.tutID);

        return (
            <div>
                <Container fluid>
                    <Row className='mainTutorial'>
                        <div className='video'>
                            <iframe width="100%" height="350" controls="controls" className="video-stream" src={this.state.mTutorialHref}>
                            </iframe>
                        </div>
                        <div className='videoTitle'>
                            {this.state.mTutorialName}
                        </div>
                        <div className='videoDescription'>
                            {this.state.mTutorialDescription}
                        </div>
                    </Row>
                    {this.state.tutorials.map(item => (
                        <div onClick={() => this.changeTut(item)}>
                            <TutorialPagePart 
                            key = {item.tutorialName}
                            tutName = {item.tutorialName}
                            tutDescription = {item.tutorialDescription}
                            isSelected = {this.state.mTutorialName}
                            />
                        </div>
                    ))}
                </Container>


            </div>
        )
    }
}
