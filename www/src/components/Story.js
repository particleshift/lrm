import React from "react";
import Styled from "styled-components";
import { SectionHeader, OuterContainer, H_GUTTER } from "../css.js";

const About = () => {
  return (
    <StoryOuterContainer>
      <SectionHeader>Our Story</SectionHeader>
      <p>
        Cedar Rapids has a large population of ‘invisible’ women. These women
        face unemployment, unhealthy relationships, and homelessness. All of
        which, make them the most vulnerable to becoming physically, emotionally
        and sexually victimized.
      </p>
      <p>
        After multiple personal interactions with these women coming from
        various backgrounds and ages it became our desire to provide a safe,
        supportive, and Christ filled place for women to gather, to build
        healthy relationships, discover and build upon their strengths/talents,
        and realize their value through a relationship with Christ.
      </p>
      <p>
        In February 2017 we secured a rental agreement on a 200 year old cottage
        and began to refurbished it. On August 4, 2017 we held our official open
        house and opened the doors to welcome the women .
      </p>
    </StoryOuterContainer>
  );
};

const StoryOuterContainer = Styled(OuterContainer)`
    color: #ffffff;
    flex-direction: column;
    margin-left: ${H_GUTTER}px;

`;

export default About;
