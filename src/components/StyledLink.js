import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 0.84rem 2.14rem;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  font-size: 0.81rem;
  border-radius: 0.125rem;
  line-height: 1.5;
  margin: 1rem 2rem;
  border: none;
  background: rgba(255, 255, 255, 0.5);
  color: black;

  :hover {
    color: white;
    background-color: rgba(255, 255, 255, 0.5);
    transition: 0.2s;
    text-decoration: none;
  }
  :focus {
    outline: 0;
    box-shadow: 0 0 3pt 2pt white;
  }
`;

export default StyledLink;
