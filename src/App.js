import React from 'react'
import './App.scss'
import './components/WelcomePage'
import WelcomePage from './components/WelcomePage'
import Projects from './components/Projects'
import Links from './components/Links'
import Menu from './components/Menu'
import { Element } from 'react-scroll'

function App() {
  return (
    <React.Fragment>
      <Menu />
      <div className='container'>
        <Element name='about'>
          <WelcomePage />
        </Element>
        <Element name='projects'>
          <Projects />
        </Element>
        <Element name='contact'>
          <Links />
        </Element>
      </div>
    </React.Fragment>
  )
}

export default App
