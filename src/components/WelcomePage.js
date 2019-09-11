import React, { Component } from 'react';
import "./WelcomePage.scss"
import panorama from "../media/panorama.svg"
class WelcomePage extends Component {
    state = {}
    render() {
        return (
            <div className="content">
                <div className="middle-text">
                    <div className="name">
                        <p>Bartosz Kępka</p>
                        <div className="line"></div>
                    </div>
                    <div className="job">
                        <p>Front-end developer</p>
                        <p>Warsaw, Poland</p>
                    </div>
                </div>
                <img src={panorama} className="panorama"></img>
            </div>
        );
    }
}

export default WelcomePage;