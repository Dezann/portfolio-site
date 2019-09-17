import React, { Component } from 'react';
import "./WelcomePage.scss"
class WelcomePage extends Component {
    state = {}
    render() {
        return (
            <div className="welcome-page-content">
                <div className="dark-bg">
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
                </div>
            </div>
        );
    }
}

export default WelcomePage;