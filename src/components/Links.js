import React, { Component } from 'react';
import "./Links.scss"
import my_photo from "../media/my_photo.svg"
import github from "../media/github.svg"
import e_mail from "../media/e-mail.svg"
import linkedin from "../media/linkedin.svg"

class Links extends Component {
    state = {}
    render() {
        return (
            <div className="content">
                <img src={my_photo} className="my_photo"></img>
                <div className="links">
                    <div className="site_names">
                        <p>Github</p>
                        <p>Email</p>
                        <p>Linkedin</p>
                    </div>
                    <div className="icons">
                        <img src={github}></img>
                        <img src={e_mail}></img>
                        <img src={linkedin}></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default Links;