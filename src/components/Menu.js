import React, { Component } from 'react';
import './Menu.scss'

class Menu extends Component {
    state = {}
    render() {
        return (
            <div className="menu-wrapper">
                <div className="menu-pages-wrapper">
                    <p>About me</p>
                    <p>Projects</p>
                    <p>Contact</p>
                </div>
            </div>
        );
    }
}

export default Menu;