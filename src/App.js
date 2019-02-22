import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
const App = () => (
  <Router>
    <div className='container '>
      <NavBar />
      <Route exact path='/' component={Home} />
    </div>
  </Router>
);

export default App;
