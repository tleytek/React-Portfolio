import styled from 'styled-components';

const Header1 = styled.h1`
  margin: 0px 10px;
  font-size: 6rem;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: 8px;
  flex-shrink: 1;
  @media (max-width: 576px) {
    font-size: 3em;
    letter-spacing: 3px;
  }
`;

export default Header1;
