import React, { Component } from 'react';
import cardman from "../media/Projects/cardman.svg"
import Project from "./Project"
import "./Projects.scss"

class Projects extends Component {
    state = {}

    render() {
        return (
            <div className="projects-page-content">
                <Project
                    title="Cardman Multiplayer"
                    image={cardman}
                    info="A multiplayer cardman game with playing cards.">
                </Project>
                <Project
                    title="Cardman Multiplayer"
                    image={cardman}
                    info="A multiplayer cardman game with playing cards.">
                </Project>
            </div>
        );
    }
}

export default Projects;