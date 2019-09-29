import React, { Component } from 'react'
import { Link } from 'react-scroll'
import './Menu.scss'

class Menu extends Component {
  state = {}
  //todo dziura
  render() {
    return (
      <div className='menu-wrapper'>
        <div className='menu' id='menu'>
          <div className='menu-pages-wrapper'>
            <Link
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
            <Link
              activeClass='active'
              to='projects'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
            <Link
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Menu
