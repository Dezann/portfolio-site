import React, { Component } from 'react';
import "./Project.scss"

class Project extends Component {
    state = {}
    render() {
        return (
            <div className="project-wrapper">
                <img className="project-img" src={this.props.image}></img>
                <p className="project-title">{this.props.title}</p>
                <p className="project-info">{this.props.info}</p>
            </div>
        );
    }
}

export default Project;