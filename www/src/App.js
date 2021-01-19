import React from "react";
import Styled from "styled-components";
import GlobalCSS from "./css.js";
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import Quotes from "./components/Quotes.js";
import Video from "./components/Video.js";
import About from "./components/About.js";
import Story from "./components/Story.js";
import Footer from "./components/Footer.js";
import { OuterContainer, InnerContainer, V_GUTTER, H_GUTTER } from "./css.js";

const LeatherTexture =
  "https://living-room-ministries.s3-us-west-1.amazonaws.com/assets/leather.png";

function App() {
  return (
    <Container>
      <GlobalCSS />
      <Header></Header>
      <Hero></Hero>

      <Row id="about">
        <Column width="55%">
          <Video></Video>
        </Column>
        <Column width="45%">
          <Story></Story>
        </Column>
      </Row>
      <About></About>
      <Footer></Footer>
    </Container>
  );
}

const Container = Styled.div``;

const Row = Styled(OuterContainer)`
  background-image: url(${LeatherTexture});
  background-size: cover;

  display: flex;
  flex-direction: row;
  padding: ${H_GUTTER}px ${H_GUTTER}px;
`;

const Column = Styled.div`
  display:flex;
  align-items: center;
  width: ${(props) => props.width};
`;

export default App;
