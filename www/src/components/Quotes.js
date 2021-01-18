import React, { useState } from "react";
import { OuterContainer, InnerContainer } from "../css.js";
import Styled from "styled-components";
import ImgFlourish from "../assets/flourish-white.png";
import LeatherTexture from "../assets/darkleather2.png";

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const quotes = [
    "Living room ministries changed my whole life",
    "Pam is the coolest! Lorem ipsum dolor set imet.",
    "Pam is the nicest! Lorem ipsum dolor set imet.",
  ];

  const Pagination = quotes.map((quote, i) => {
    return (
      <Dot onClick={() => setActiveIndex(i)} active={activeIndex === i}></Dot>
    );
  });

  return (
    <QuoteOuterContainer>
      <QuoteInnerContainer>
        <FlourishLeft src={ImgFlourish} />
        <QuoteWrapper>
          <BigQuote>&#8220;</BigQuote>
          <Quote>{quotes[activeIndex]}</Quote>
        </QuoteWrapper>
        <PaginationWrapper>{Pagination}</PaginationWrapper>
        <FlourishRight src={ImgFlourish} />
      </QuoteInnerContainer>
    </QuoteOuterContainer>
  );
};

const FlourishLeft = Styled.img`
  height: 25px;
  width: 120px;
//   visibility: hidden;
    opacity: .33;
`;
const FlourishRight = Styled(FlourishLeft)`
  transform: scaleX(-1);
`;

const QuoteOuterContainer = Styled(OuterContainer)`
//   background: #1e1e21;
  padding: 50px 0;

//   background-image: url(${LeatherTexture});
`;

const QuoteInnerContainer = Styled(InnerContainer)`
  align-items: center;  
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 0px;
  position: relative;
`;

const QuoteWrapper = Styled.div`
  align-items: center;
  box-sizing: content-box;
  display: flex;
  height: 50px;
  justify-content: center;
  padding: 35px 50px 25px 50px;
  position: relative;
  width: 300px;
`;

const BigQuote = Styled.span`
  color: #fafafa;
  font-family: serif;
  font-size: 90px;
  left: 30px;
  opacity: .75;
  position: absolute;
  top: 0;
  transform: translate3d(-10px, -15px, 0);
`;

const Quote = Styled.p`
  color: #fafafa;
  font-family: 'Parisienne', cursive;
  font-size: 25px;
  text-align: center;
`;

const PaginationWrapper = Styled.div`
  bottom: 5px;
  display: flex;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const Dot = Styled.div`
  background: white;
  border-radius: 100%;
  cursor: pointer;
  height: 10px;
  margin: 0 7.5px;
  opacity: .75;
  position: relative;
  width: 10px;

  &::after {
    background-color: ${(props) => (props.active ? "black" : "white")};
    border-radius: 100%;
    content: '';
    height: 5px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 5px;
  }
`;

export default Header;
