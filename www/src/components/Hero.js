import React from "react";
import { OuterContainer, InnerContainer } from "../css.js";
import Styled from "styled-components";
import HeroBg from "../assets/hero-bg.jpg";

const Header = () => {
  const height = window.innerHeight - 60;

  return (
    <HeroOuterContainer height={height} bg={HeroBg}>
      <Shadow />
      <HeroInnerContainer>
        <BigText>A Warm Safe Space</BigText>
        <SubText>
          for creating healthy relationships and acquiring skills to break free
          from poverty and victimization
        </SubText>

        <ButtonWrapper>
          <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=U4NC5KB43LMFJ">
            <Button>Donate</Button>
          </a>
        </ButtonWrapper>
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
  margin-top: 60px;
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

const ButtonWrapper = Styled.div`
    margin: 60px 0 30px 0;
`;

const Button = Styled.button`
  appearance: none;
  cursor: pointer;
  background-color: var(--color-pink);
  color: #FFFFFF;
  
  font-size: 30px;
  padding: 15px 50px;
  
  border: 5px solid var(--color-pink);
  transition: border-color .25s;

  :hover {
    border-color: white;    
  }

`;

export default Header;
