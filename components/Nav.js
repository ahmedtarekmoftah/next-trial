import React from "react";
import { StyledNav } from "../styles/Nav.styles";
import Link from "next/link";

const Nav = () => {
  return (
    <StyledNav>
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
    </StyledNav>
  );
};
export default Nav;
