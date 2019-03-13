import styled from 'styled-components';

const OpaqueBackground = styled.div`
  background: rgba(255, 255, 255, 0.5);

  &.header1 {
    border-radius: 25px;
    align-self: center;
  }

  &.header3 {
    border-radius: 0px 0px 25px 25px;
    align-self: center;
  }
`;

export default OpaqueBackground;
