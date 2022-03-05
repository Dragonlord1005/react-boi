import React from 'react';
import {Link} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="cookie.tsx"
          // target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <nav>
          <ul>
            <li><Link to="/cookie"></Link></li>
          </ul>
        </nav>

      </header>
    </div>
  );
}

export default App;
