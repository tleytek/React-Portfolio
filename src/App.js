import React from 'react';
import NavBar from './components/Navbar/Navbar';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <NavBar />
      <div className='max-height' />
    </div>
  </Router>
);

export default App;
