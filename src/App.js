import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/Navbar.js';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import styled from 'styled-components';

const FullHeight = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI', 'Segoe UI Symbol';
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
`;

const App = () => (
  <Router>
    <FullHeight>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/aboutme" component={AboutMe} />
    </FullHeight>
  </Router>
);

export default App;
