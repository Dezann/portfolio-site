import React, { Component } from 'react';
import "./Links.scss"
import my_photo from "../media/my_photo.jpg"
import github from "../media/github.svg"
import e_mail from "../media/e_mail.svg"
import linkedin from "../media/linkedin.svg"

class Links extends Component {
    state = {}
    render() {
        return (
            <div className="links-content">
                <div className="links-wrapper">
                    <p className="contact-me-txt">Contact me</p>
                    <div className="line"></div>
                    <div className="links">
                        <a href="https://github.com/dezann" target="_blank">
                            <div className="links-row">
                                <img alt="" src={github}></img>
                                <p>Github</p>
                            </div>
                        </a>
                        <a href="mailto: bartoszkepka1999@gmail.com" target="_blank">
                            <div className="links-row">
                                <img alt="" src={e_mail}></img>
                                <p>Email</p>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/bartosz-k%C4%99pka-118325181/.com">
                            <div className="links-row" target="_blank">
                                <img alt="" src={linkedin}></img>
                                <p>Linkedin</p>
                            </div>
                        </a>
                    </div>
                </div>
                <img src={my_photo} className="my-photo"></img>
            </div >
        );
    }
}

export default Links;