import React from "react";
import { StyledHiddenNavbar } from "../styles/HiddenNavbar.styles";
import Link from "next/link";

const HiddenNavbar = (props) => {
  return (
    <StyledHiddenNavbar hide={props.hide}>
      <Link ClassName="NavLink" href="">
        Top 10
      </Link>
      <Link ClassName="NavLink" href="">
        Nutrition
      </Link>
      <Link ClassName="NavLink" href="">
        Football
      </Link>
      <Link ClassName="NavLink" href="/about">
        About Us
      </Link>
    </StyledHiddenNavbar>
  );
};
export default HiddenNavbar;
