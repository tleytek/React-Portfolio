import styled from 'styled-components';

const BackgroundImage = styled.div`
  display: flex;
  background-image: url(${props => props.href});
  background-position: center center;
  background-size: cover;
  flex-grow: 1;
  margin: 0;
  justify-content: center;
`;

export default BackgroundImage;
