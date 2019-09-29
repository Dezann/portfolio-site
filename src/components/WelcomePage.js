import React, { Component } from 'react'
import './WelcomePage.scss'
class WelcomePage extends Component {
  state = {}
  render() {
    return (
      <div className='welcome-page-content' id='about'>
        <div className='dark-bg'>
          <div className='middle-text'>
            <div className='name'>
              <p>
                <span style={{ color: '#FFCC0A' }}>Bartosz</span> Kępka
              </p>
            </div>
            <div className='job'>
              <p>front-end developer</p>
              <p>Warsaw, Poland</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WelcomePage
