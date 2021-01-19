import React, { useRef, useEffect, useState } from "react";
import { InnerContainer } from "../css.js";
import LogoImg from "../assets/logo.webp";
import LogoImgSmall from "../assets/logo-small.png";
import Styled from "styled-components";

const headerHeight = 100;
const headerHeightSmall = 60;

const logoHeight = 60;
const logoHeightSmall = 30;

const Header = () => {
  const aboutRef = useRef(null);
  const newletterRef = useRef(null);
  const contactRef = useRef(null);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", onScrollHandler);

    return function cleanup() {
      window.removeEventListener("scroll");
    };
  }, []);

  const onScrollHandler = (e) => {
    if (window.pageYOffset > headerHeight) setIsSticky(true);
    else setIsSticky(false);
  };

  // const scrollTo = (element) => {
  //   element.current.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //   });
  // };

  return (
    <HeaderOuterContainer isSticky={isSticky}>
      <HeaderInnerContainer>
        <Nav>
          <LogoContainer>
            <Logo src={LogoImg} size={"large"} visible={!isSticky} />
            <Logo src={LogoImgSmall} size={"small"} visible={isSticky} />
          </LogoContainer>

          <div>
            <NavItem ref={aboutRef} href="#about">
              About
            </NavItem>
            <NavItem ref={contactRef} href="#contact">
              Contact
            </NavItem>
            <NavItem
              ref={newletterRef}
              target="_blank"
              href="https://living-room-ministries.s3-us-west-1.amazonaws.com/assets/LivingRoom+Ministries_Newsletter_Jan.pdf"
            >
              Newsletter
            </NavItem>
            <DonateButton href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=U4NC5KB43LMFJ">
              Donate
            </DonateButton>
          </div>
        </Nav>
      </HeaderInnerContainer>
    </HeaderOuterContainer>
  );
};

const HeaderOuterContainer = Styled.header`
  top: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #FFFFFF;
  box-shadow: -1px 4px 14px -2px rgba(0,0,0,0.420);
  height: ${(props) =>
    props.isSticky ? headerHeightSmall + "px" : headerHeight + "px"};
  width: 100%;
  z-index: 3;

  transition: height .25s ease-in;
`;

const HeaderInnerContainer = Styled(InnerContainer)`
  padding-bottom: 0;  
  padding-top: 0;  
`;

const Nav = Styled.nav`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`;

const LogoContainer = Styled.div`
  position: relative;
  height: ${(props) =>
    props.size === "small" ? logoHeightSmall + "px" : logoHeight + "px"};
`;

const Logo = Styled.img`
  opacity: ${(props) => (props.visible ? "100" : "0")};
  height: ${(props) =>
    props.size === "small" ? logoHeightSmall + "px" : logoHeight + "px"};
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  transition: opacity .25s ease-in-out;
`;

const NavItem = Styled.a`
  cursor: pointer;
  margin: 0 5px;
  padding: 0 5px;
  font-size: 24px;

  transition: background-color .3s ease-in;

  :hover {
    background-color: var(--color-yellow-light);
  }
`;

const DonateButton = Styled(NavItem)`
//   background-color: var(--color-yellow-light);
  margin: 0 0 0 10px;
//   padding: 5px;
  cursor: pointer;
`;

export default Header;
