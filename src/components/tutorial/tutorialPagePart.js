import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import './tutorials.css'
import { propTypes } from "react-bootstrap/esm/Image";
import { Redirect } from "react-router-dom";

export default class TutorialPagePart extends PureComponent
{

    static propTypes =
    {
        tutName: PropTypes.string,
        tutDescription: PropTypes.string,
        tutHref: PropTypes.string,
        isSelected: PropTypes.string,
    };

    state = { redirect: null };

    changeTut()
    {
        console.log('changeTut() called.');
    }

    render()
    {
        if (this.props.isSelected == this.props.tutName)
        {
            return (
                <div className="tutorial-page-part-row selected" onClick={this.changeTut}>
                    <div className="tutTitle">{this.props.tutName}</div>
                    <div className="tutDescription">{this.props.tutDescription}</div>
                </div>
            )
        }
        return (
            <div className="tutorial-page-part-row" onClick={this.changeTut}>
                <div className="tutTitle">{this.props.tutName}</div>
                <div className="tutDescription">{this.props.tutDescription}</div>
            </div>
        )
    }
}