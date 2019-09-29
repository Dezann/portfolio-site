import React, { Component } from 'react'
import cardman from '../media/Projects/cardman.svg'
import poznajmySie from '../media/Projects/poznajmy-sie.svg'
import Project from './Project'
import './Projects.scss'
class Projects extends Component {
  state = {}

  render() {
    return (
      <div className='projects-page-content'>
        <div className='primary-projects-txt'>
          <p>MY PRIMARY PROJECTS</p>
        </div>
        <div className='projects-wrapper'>
          <Project
            link='https://github.com/VengelStudio/cardman-multiplayer'
            title='Cardman Multiplayer'
            image={cardman}
            info='A multiplayer hangman with elements of card game.'
          ></Project>
          <Project
            title='Poznajmy się'
            image={poznajmySie}
            info='A fortune wheel party game with intriguing questions.'
          ></Project>
          <Project
            title='Placeholder'
            image={poznajmySie}
            info='A fortune wheel party game with intriguing questions.'
          ></Project>
        </div>
      </div>
    )
  }
}

export default Projects
