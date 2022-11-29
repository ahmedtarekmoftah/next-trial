import styled from "styled-components";

export const StyledHiddenNavbar = styled.div`
  width: calc(100% - 60px);
  z-index: 2;
  background-color: #ffffff;
  position: fixed;
  top: 54px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  padding: 30px;
  right: ${(props) => (props.hide ? "100%" : "0")};
  ::after {
    content: "";
    position: absolute;
    width: 100%;
    min-height: 100vh;
    z-index: -1;
  }
  a {
    font-size: 1.2rem;
  }
  @media only screen and (min-width: 1024px) {
    display: none;
  }
`;
