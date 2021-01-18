import React from "react";
import {
  OuterContainer,
  InnerContainer,
  SectionHeader,
  V_GUTTER,
} from "../css.js";
import Styled from "styled-components";

const About = () => {
  return (
    <AboutOuterContainer>
      <Blur bg="https://static.wixstatic.com/media/31e2e9a7bf5b465887db7407f729ddb8.jpg/v1/fill/w_1984,h_1690,al_c,q_90,usm_0.66_1.00_0.01/31e2e9a7bf5b465887db7407f729ddb8.webp" />
      <Gradient />
      <AboutInnerContainer>
        <Row>
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
                <Avatar src="https://static.wixstatic.com/media/01fdd6_4c093f2e020447b49f2ff3c71d9d839d~mv2.jpg/v1/crop/x_85,y_0,w_1018,h_729/fill/w_592,h_420,al_c,q_80,usm_0.66_1.00_0.01/01fdd6_4c093f2e020447b49f2ff3c71d9d839d~mv2.webp" />
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
                <Avatar src="https://static.wixstatic.com/media/01fdd6_4c093f2e020447b49f2ff3c71d9d839d~mv2.jpg/v1/crop/x_85,y_0,w_1018,h_729/fill/w_592,h_420,al_c,q_80,usm_0.66_1.00_0.01/01fdd6_4c093f2e020447b49f2ff3c71d9d839d~mv2.webp" />
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
                <Avatar src="https://static.wixstatic.com/media/01fdd6_4c093f2e020447b49f2ff3c71d9d839d~mv2.jpg/v1/crop/x_85,y_0,w_1018,h_729/fill/w_592,h_420,al_c,q_80,usm_0.66_1.00_0.01/01fdd6_4c093f2e020447b49f2ff3c71d9d839d~mv2.webp" />
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
                <Avatar src="https://static.wixstatic.com/media/01fdd6_4c093f2e020447b49f2ff3c71d9d839d~mv2.jpg/v1/crop/x_85,y_0,w_1018,h_729/fill/w_592,h_420,al_c,q_80,usm_0.66_1.00_0.01/01fdd6_4c093f2e020447b49f2ff3c71d9d839d~mv2.webp" />
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
                <Avatar src="https://static.wixstatic.com/media/01fdd6_4c093f2e020447b49f2ff3c71d9d839d~mv2.jpg/v1/crop/x_85,y_0,w_1018,h_729/fill/w_592,h_420,al_c,q_80,usm_0.66_1.00_0.01/01fdd6_4c093f2e020447b49f2ff3c71d9d839d~mv2.webp" />
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
  margin-top: ${V_GUTTER}px;
  width: 100%;
`;

const Column = Styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.large ? "60%" : "40%")};
`;

const Avatar = Styled.img`
  border-radius: 100%;
  height: 90px;
  margin-right: 15px;
  width: 90px;
`;

export default About;
