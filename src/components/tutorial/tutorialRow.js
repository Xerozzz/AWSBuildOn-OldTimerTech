import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";
import { Redirect } from "react-router-dom";

export default class TutorialRow extends PureComponent
{

    static propTypes =
    {
        tutName: PropTypes.string,
        tutProgress: PropTypes.string,
        tutTotal: PropTypes.string,
        tutCompleted: PropTypes.bool
    };

    state = { redirect: null };

    changeTut = () => 
    {
        console.log(this.props.tutName);
        // var changeTo = this.props.tutName;
    //     this.setState({ redirect: '/tutorialspage/' + this.props.tutName});
        window.location = window.location.origin + '/tutorial/' + this.props.tutName.split(' ').join('_');
    }

    render()
    {
        const selectedItem = window.location.pathname.replace("/tutorial/", "");
        console.log(selectedItem);
        if (this.state.redirect)
        {
            return <Redirect to={this.state.redirect} />
        }
        if (this.props.tutName === selectedItem)
        {
            return (
                <div className="tutorial-row selected" onClick={this.changeTut}>
                    <div className="title">{this.props.tutName}</div>
                    <div className="progr">Progress: {this.props.tutProgress}/{this.props.tutTotal}</div>
                </div>
            )
        }
        return (
            <div className="tutorial-row" onClick={this.changeTut}>
                <div className="title">{this.props.tutName}</div>
                <div className="progr">Progress: {this.props.tutProgress}/{this.props.tutTotal}</div>
            </div>
        )
    }
}