import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        */}
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <p>
          <a href="cookie.tsx"></a>
        </p>
      </header>
    </Router>
  );
}

function Home() {
  return (
    <h1>
      Sup
    </h1>
  )
}

export default App;
