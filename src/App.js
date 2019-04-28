import React from 'react';
import logo from './logo.svg';
import './App.css';
import Filmography from './components/Filmography';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      <Filmography />
    </div>
  );
}

export default App;
