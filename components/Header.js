import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import {
  StyledHeader,
  StyledHeaderContainer,
  StyledHeaderMainContainer,
} from "../styles/Header.styles";
import Link from "next/link";
import HiddenNavbar from "./HiddenNavbar";

const Header = () => {
  const [HideNav, SetHideNav] = useState(true);
  function handleClick() {
    SetHideNav((previous) => !previous);
  }
  useEffect(() => {
    if (HideNav == false) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [HideNav]);
  return (
    <StyledHeaderMainContainer>
      <StyledHeaderContainer>
        <HiddenNavbar hide={HideNav}></HiddenNavbar>
        <StyledHeader hide={HideNav}>
          <img
            id="HeaderMenuImage"
            src="/menu.svg"
            alt="Site menu"
            onClick={handleClick}
          />
          <Link href="/">
            <img
              id="HeaderTitleImage"
              src="/englishHeader.svg"
              alt="Site Header"
            />
          </Link>
          <Nav />
        </StyledHeader>
      </StyledHeaderContainer>
    </StyledHeaderMainContainer>
  );
};
export default Header;
