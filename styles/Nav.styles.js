import styled from "styled-components";

export const StyledNav = styled.nav`
  display: none;

  @media only screen and (min-width: 1024px) {
    display: flex;
    height: 100%;
    align-items: center;
    a {
      font-size: 1rem;
      font-family: "poppins", Courier, monospace;
      position: relative;
      font-weight: 500;
      top: 2px;
      padding: 10px;
      color: #454545;
    }
    a:hover {
      font-weight: 600;
    }
  }
`;
