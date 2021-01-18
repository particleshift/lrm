import React, { useRef } from "react";
import { InnerContainer } from "../css.js";
import LogoImg from "../assets/logo.webp";
import Styled from "styled-components";

const Header = () => {
  const aboutRef = useRef(null);
  const newletterRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (element) => {
    element.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header>
      <HeaderOuterContainer>
        <InnerContainer>
          <Nav>
            <Logo src={LogoImg} />
            <div>
              <NavItem ref={aboutRef} onClick={() => scrollTo(aboutRef)}>
                About
              </NavItem>
              <NavItem
                ref={newletterRef}
                onClick={() => scrollTo(newletterRef)}
              >
                Newsletter
              </NavItem>
              <NavItem ref={contactRef} onClick={() => scrollTo(contactRef)}>
                Contact
              </NavItem>
              <DonateButton>Donate</DonateButton>
            </div>
          </Nav>
        </InnerContainer>
      </HeaderOuterContainer>
    </header>
  );
};

const HeaderOuterContainer = Styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #FFFFFF;
`;

const Nav = Styled.nav`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  position: sticky;
  top: 0;
`;

const Logo = Styled.img`
  height: 60px;
  width: 100px;
`;

const NavItem = Styled.a`
  cursor: pointer;
  margin: 0 10px;
  font-size: 24px;
`;

const DonateButton = Styled(NavItem)`
  background-color: var(--color-yellow-light);
  margin: 0 0 0 10px;
  cursor: pointer;
`;

export default Header;
