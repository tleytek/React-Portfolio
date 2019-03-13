import React from 'react';
// import './NavBar.css';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  width: 960px;
  display: flex;
  justify-content: flex-end;
`;
const NavBackground = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  justify-content: center;
  border: 10px solid white
  box-shadow: 0px 5px 2px 5px white;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: block;
  padding: 1em;
  color: white;

  &.selected {
    background: rgba(255, 255, 255, 0.4);
  }

  :hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const NavBar = () => {
  return (
    <NavBackground>
      <NavContainer>
        <StyledNavLink exact to="/" activeClassName="selected">
          Home
        </StyledNavLink>
        <StyledNavLink exact to="/aboutme" activeClassName="selected">
          About Me
        </StyledNavLink>
        <StyledNavLink exact to="/projects" activeClassName="selected">
          Projects
        </StyledNavLink>
        <StyledNavLink exact to="/contact" activeClassName="selected">
          Contact
        </StyledNavLink>
      </NavContainer>
    </NavBackground>
  );
};

export default NavBar;
