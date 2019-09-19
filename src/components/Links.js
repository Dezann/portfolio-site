import React, { Component } from 'react';
import "./Links.scss"
import my_photo from "../media/my_photo.svg"
import github from "../media/github.svg"
import e_mail from "../media/e_mail.svg"
import linkedin from "../media/linkedin.svg"

class Links extends Component {
    state = {}
    render() {
        return (
            <div className="links-content">
                <div className="links-wrapper">
                    <img src={my_photo} className="my-photo"></img>
                    <div className="links">
                        <a href="https://github.com/dezann" target="_blank">
                            <div className="links-row">
                                <p>GITHUB</p>
                                <img alt="" src={github}></img>
                            </div>
                        </a>
                        <div className="links-line"></div>
                        <a href="mailto: bartoszkepka1999@gmail.com" target="_blank">
                            <div className="links-row">
                                <p>EMAIL</p>
                                <img alt="" src={e_mail}></img>
                            </div>
                        </a>
                        <div className="links-line"></div>
                        <a href="https://www.linkedin.com/in/bartosz-k%C4%99pka-118325181/.com">
                            <div className="links-row" target="_blank">
                                <p>LINKEDIN</p>
                                <img alt="" src={linkedin}></img>
                            </div>
                        </a>
                    </div>
                </div>
            </div >
        );
    }
}

export default Links;