import React from 'react';
import logo from './logo.svg';
import './App.scss';
import './components/WelcomePage'
import WelcomePage from './components/WelcomePage';
import Projects from './components/Projects'
import Links from './components/Links'

function App() {
  return (
    <div className="container">
      <WelcomePage />
      <Projects />
      <Links />
    </div >
  );
}

export default App;
