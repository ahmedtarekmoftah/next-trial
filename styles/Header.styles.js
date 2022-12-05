import styled from "styled-components";

export const StyledHeaderMainContainer = styled.header`
  width: 100%;
  box-shadow: 0px 0px 3px 0px #00000036;
  position: fixed;
  z-index: 10;
  top: 0px;
  background-color: #fff;
`;

export const StyledHeaderContainer = styled.header`
  margin: auto;

  @media only screen and (min-width: 1024px) {
    width: calc(100% - 15rem);
  }
`;

export const StyledHeader = styled.header`
  height: 55px;
  width: 100%;
  display: flex;
  background-color: #fff;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;

  #HeaderTitleImage {
    width: 160px;
    cursor: pointer;
  }
  #HeaderMenuImage {
    display: block;
    width: 25px;
    height: 25px;
    margin-left: 7px;
  }
  @media (min-width: 1024px) {
    gap: 20px;
    #HeaderMenuImage {
      display: none;
    }
    #HeaderTitleImage {
      width: 170px;
    }
  }
`;
