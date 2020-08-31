import React, { PureComponent } from "react";
import PropTypes from "prop-types";
// import "./tutorialRow.css"

export default class TutorialRow extends PureComponent
{
    static propTypes =
    {
        tutName: PropTypes.string,
        tutProgress: PropTypes.string,
        tutTotal: PropTypes.string,
        tutCompleted: PropTypes.bool
    };

    if (tutCompleted)
    {

    }
    render()
    {
        <div className="tutorial-row">
            <span className="title">{this.props.tutName}</span>
            <span className="progress">{this.props.tutProgress}/{this.props.tutTotal}</span>
        </div>
    }
}