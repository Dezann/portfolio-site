import React from 'react';
import './App.scss';
import './components/WelcomePage'
import WelcomePage from './components/WelcomePage';
import Projects from './components/Projects'
import Links from './components/Links'
import Menu from './components/Menu'

function App() {
  return (
    <React.Fragment>
      <Menu />
      <div className="container">
        <WelcomePage />
        <Projects />
        <Links />
      </div >
    </React.Fragment>
  );
}

export default App;
