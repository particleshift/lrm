import React from "react";
import { OuterContainer, InnerContainer } from "../css.js";
import Styled from "styled-components";

const Header = () => {
  const height = window.innerHeight - 100;
  console.log("Header -> height", height);

  return (
    <HeroOuterContainer
      height={height}
      bg="https://static.wixstatic.com/media/01fdd6_07d19a205d6e48c5bc07b667467812be~mv2_d_4032_3024_s_4_2.jpg/v1/fill/w_2062,h_1546,al_c,q_90,usm_0.66_1.00_0.01/01fdd6_07d19a205d6e48c5bc07b667467812be~mv2_d_4032_3024_s_4_2.jpg"
    >
      <Shadow />
      <HeroInnerContainer>
        <BigText>A Warm Safe Place</BigText>
        <SubText>
          for creating healthy relationships and acquiring skills to break free
          from poverty and victimization
        </SubText>

        <Button>Donate</Button>
        <TinyText>
          <b>100%</b> of your tax deductible donation goes towards meeting the
          daily and monthly operational and programming costs.
          <b> No</b> money goes towards administration.
        </TinyText>
      </HeroInnerContainer>
    </HeroOuterContainer>
  );
};

const HeroOuterContainer = Styled(OuterContainer)`
  height: ${(props) => props.height}px;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  overflow: hidden;
  position: relative;
`;

const Shadow = Styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  opacity: .6;
`;

const HeroInnerContainer = Styled(InnerContainer)`
  align-items: center;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
`;

const BigText = Styled.h1`
  color: #FFFFFF;
  font-size: 70px;
  font-weight: 700;
  margin: 10px 0;
  text-align: center;
`;

const SubText = Styled.h2`
  color: #FFFFFF;
  font-family: 'Arapey', serif;
  font-size: 25px;
  max-width: 600px;
  text-align: center;
`;

const TinyText = Styled.p`
  color: #FFFFFF;
  // font-family: 'Roboto', sans-serif;
  max-width: 600px;
  text-align: center;
  font-size: 13px;
`;

const Button = Styled.button`
  appearance: none;
  background-color: var(--color-pink);
  color: #FFFFFF;
  
  font-size: 30px;
  margin: 60px 0 30px 0;
  padding: 15px 50px;
`;

export default Header;
