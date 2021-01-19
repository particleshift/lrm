import React from "react";
import {
  OuterContainer,
  InnerContainer,
  SectionHeader,
  V_GUTTER,
} from "../css.js";
import Styled from "styled-components";
import AboutBg from "../assets/about.webp";
import ProcessStep1 from "../assets/process-step-1.webp";

const About = () => {
  return (
    <AboutOuterContainer>
      <Blur bg={AboutBg} />
      <Gradient />
      <AboutInnerContainer>
        <Row style={{ marginTop: 0 }}>
          <Column large={true}>
            <SectionHeader>Our Process</SectionHeader>
          </Column>
          <Column></Column>
        </Row>
        <Row>
          <Column></Column>
          <Column large={true}>
            <Row>
              <div>
                <Avatar src={ProcessStep1} />
              </div>
              <div>
                <h4>Fellowship</h4>
                <p>
                  We welcome women of all ages, ethnicities, and backgrounds.
                  You will become part of a community of supportive and
                  encouraging women as you enjoy refreshments, laughter,
                  conversation, and leisure activities.
                </p>
              </div>
            </Row>
          </Column>
        </Row>
        <Row>
          <Column large={true}>
            <Row>
              <div>
                <Avatar src={ProcessStep1} />
              </div>
              <div>
                <h4>DISCOVERY</h4>
                <p>
                  Spend time discovering, exploring, and expanding your
                  passions. Participate in arts & crafts, music, sewing, and
                  baking activities; book and movie discussions; personality and
                  strength profiles.
                </p>
              </div>
            </Row>
          </Column>
          <Column></Column>
        </Row>
        <Row>
          <Column></Column>
          <Column large={true}>
            <Row>
              <div>
                <Avatar src={ProcessStep1} />
              </div>
              <div>
                <h4>RENEWAL</h4>
                <p>
                  Experience spiritual and emotional healing through
                  participation in bible study and prayer in small group or
                  1-on-1 settings.
                </p>
              </div>
            </Row>
          </Column>
        </Row>
        <Row>
          <Column large={true}>
            <Row>
              <div>
                <Avatar src={ProcessStep1} />
              </div>
              <div>
                <h4>GROWTH</h4>
                <p>
                  Build a stronger tomorrow through learning new skills in areas
                  such as: goal setting; conflict, stress, and anger management;
                  communication; parenting; your child and IEPs; budgeting; and
                  employability.
                </p>
              </div>
            </Row>
          </Column>
          <Column></Column>
        </Row>
        <Row>
          <Column></Column>
          <Column large={true}>
            <Row>
              <div>
                <Avatar src={ProcessStep1} />
              </div>
              <div>
                <h4>FULL CIRCLE</h4>
                <p>
                  Become a volunteer sharing your story, experience, passions,
                  gifts and talents with other women to encourage them as they
                  make their way along the journey to a stronger tomorrow.
                </p>
              </div>
            </Row>
          </Column>
        </Row>
      </AboutInnerContainer>
    </AboutOuterContainer>
  );
};

const AboutOuterContainer = Styled(OuterContainer)`
    overflow: hidden;  
    position: relative;
`;

const Blur = Styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    filter: blur(5px);
    background-image: url(${(props) => props.bg});
    background-size: cover;
`;

const Gradient = Styled.div`
    position: absolute;
    width: 100%;
    height: 100%;


    

    background: -moz-linear-gradient(top,  rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 76%, rgba(255,255,255,0.4) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.3) 76%,rgba(255,255,255,0.4) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.3) 76%,rgba(255,255,255,0.4) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */


    

    

    
`;

const AboutInnerContainer = Styled(InnerContainer)`
  align-items: center;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
`;

const Row = Styled.div`
  display: flex;
  flex-direction: row;
  margin-top: ${20}px;
  width: 100%;
`;

const Column = Styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.large ? "60%" : "40%")};
`;

const Avatar = Styled.img`
  border-radius: 100%;
  height: 150px;
  margin-right: 15px;
  width: 150px;
`;

export default About;
