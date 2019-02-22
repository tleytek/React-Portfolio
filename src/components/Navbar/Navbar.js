import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav className='navbar'>
        <div className='container'>
          <NavLink className='nav-link' exact to='/' activeClassName='selected'>
            Home
          </NavLink>
          <NavLink className='nav-link' exact to='/about' activeClassName='selected'>
            About Me
          </NavLink>
          <NavLink className='nav-link' exact to='/projects' activeClassName='selected'>
            Projects
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
