import React from "react";
import Styled from "styled-components";
import { SectionHeader, OuterContainer, H_GUTTER } from "../css.js";

const About = () => {
  return (
    <StoryOuterContainer>
      <SectionHeader>Our Story</SectionHeader>
      <p>
        Founded in ____ by Pam Skelton, Living Room is a daytime safe space for
        women, offering a secure, homelike setting for conversation and personal
        connection.
      </p>
      <p>
        Our mission is to help women build healthy relationships, and get the
        tools, resources, and support they need to move forward with their
        lives.
      </p>
      <p>We welcome all women in need, including those experiencing:</p>
      <p>
        Addiction <br />
        Domestic abuse and violence <br />
        Homelesness <br />
        Mental health issues <br />
        Sex trafficking <br />
        Sexual assault <br />
        Social isolation <br />
        Trauma <br />
      </p>
      <p>Drop in for crafts and games or study groups.</p>
    </StoryOuterContainer>
  );
};

const StoryOuterContainer = Styled(OuterContainer)`
    color: #ffffff;
    flex-direction: column;
    margin-left: ${H_GUTTER}px;

`;

export default About;
