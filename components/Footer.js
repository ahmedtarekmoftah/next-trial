import React from "react";
import Nav from "./Nav";
import { StyledFooter } from "../styles/footer.styles";
import { useEffect, useState } from "react";

var Footer = () => {
  const [bodyHeight, SetBodyHeight] = useState(false);
  useEffect(() => {
    SetBodyHeight(() => document.body.offsetHeight < 700);
  });
  return (
    <StyledFooter bodyHeight={bodyHeight}>
      <img id="FooterTitleImage" src="/englishHeader.svg" alt="Site Header" />
      <Nav />
    </StyledFooter>
  );
};
export default Footer;
