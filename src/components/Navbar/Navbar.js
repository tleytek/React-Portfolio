import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='dark-overlay'>
      <div className='navbar'>
        <div className='nav-container'>
          <NavLink className='nav-link' exact to='/' activeClassName='selected'>
            Home
          </NavLink>
          <NavLink className='nav-link' exact to='/about' activeClassName='selected'>
            About Me
          </NavLink>
          <NavLink className='nav-link' exact to='/projects' activeClassName='selected'>
            Projects
          </NavLink>
          <NavLink className='nav-link' exact to='/blog' activeClassName='selected'>
            Blog
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
