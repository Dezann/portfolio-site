import React, { Component } from 'react'
import { Link } from 'react-scroll'
import './Menu.scss'




class Menu extends Component {
    constructor(props) {
        super(props)
        this.sections = React.createRef()
    }
    state = {
    }

    detectSection = () => {
        let sections = this.sections.current
        console.log(sections)
    }

    componentDidMount() {
        this.detectSection()
    }
    render() {
        return (
            <div className='menu' id='menu'>
                <div className='menu-pages-wrapper' ref={this.sections}>
                    <Link
                        activeClass='active'
                        to='about'
                        spy={true}
                        smooth={true}
                        offset={-59}
                        duration={500}
                    >
                        About
          </Link>
                    <Link
                        activeClass='active'
                        to='projects'
                        spy={true}
                        smooth={true}
                        offset={-59}
                        duration={500}
                    >
                        Projects
          </Link>
                    <Link
                        activeClass='active'
                        to='contact'
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={500}
                    >
                        Contact
          </Link>
                </div>
            </div>
        )
    }
}

export default Menu
