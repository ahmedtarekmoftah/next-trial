import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 3px 0px #00000036;
  padding: 20px;
  margin-top: 30px;
  position: ${(props) => (props.bodyHeight ? "absolute" : "static")};
  bottom: 0px;
  width: calc(100% - 40px);

  #FooterTitleImage {
    width: 160px;
  }

  @media only screen and (min-width: 1024px) {
    margin-top: 70px;
    padding: 20px;
    gap: 20px;
    position: ${(props) => (props.bodyHeight ? "absolute" : "static")};
    bottom: 0px;
    width: calc(100% - 40px);
    #FooterTitleImage {
      width: 150px;
    }
  }
`;
