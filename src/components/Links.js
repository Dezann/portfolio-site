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
                <img src={my_photo} className="my-photo"></img>
                <div className="links">
                    <div className="links-row">
                        <p>Github</p>
                        <a href="https://github.com/dezann"><img src={github}></img></a>
                    </div>
                    <div className="links-line"></div>
                    <div className="links-row">
                        <p>Email</p>
                        <a href="mailto: bartoszkepka1999@gmail.com"><img src={e_mail}></img></a>
                    </div>
                    <div className="links-line"></div>
                    <div className="links-row">
                        <p>Linkedin</p>
                        <a href="https://www.linkedin.com/in/bartosz-k%C4%99pka-118325181/.com"><img src={linkedin}></img></a>
                    </div>
                </div>
            </div >
        );
    }
}

export default Links;