import React from 'react';
import BackgroundImage from '../components/BackgroundImage';
import Container from '../components/Container.js';
import OpaqueBackground from '../components/OpaqueBackground';
import Header1 from '../components/Header1';
import Header3 from '../components/Header3';
import DactylImage from '../images/dactyl-manuform-2.jpg';
import ButtonContainer from '../components/ButtonContainer';
import StyledLink from '../components/StyledLink';

const Home = () => {
  return (
    <BackgroundImage href={DactylImage}>
      <Container>
        <OpaqueBackground className="header1">
          <Header1>Mateus Koehler</Header1>
        </OpaqueBackground>
        <OpaqueBackground className="header3">
          <Header3>Freelance Web Developer & Keyboard Enthusiast</Header3>
        </OpaqueBackground>
        <ButtonContainer>
          <StyledLink exact to="/aboutme">
            About Me
          </StyledLink>
          <StyledLink exact to="/projects">
            Projects
          </StyledLink>
        </ButtonContainer>
      </Container>
    </BackgroundImage>
  );
};
export default Home;
