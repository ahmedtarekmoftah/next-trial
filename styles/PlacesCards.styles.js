import styled from "styled-components";

export const StyledPlacesCards = styled.div`
  margin: auto;
  @media only screen and (min-width: 1024px) {
    width: calc(100% - 15rem);
  }
`;

export const StyledPlacesCardsHeader = styled.div`
  width: 100%;
  margin: auto;
  #PlacesTitle {
    font-family: "Inter";
    font-size: 1.8rem;
    font-weight: 800;
    margin: 0px;
    margin-top: 15px;
    margin-bottom: 0px;
    margin-left: 30px;
  }

  #PlacesUndertitle {
    font-size: 0.8rem;
    font-family: "poppins";
    font-weight: lighter;
    width: 300px;
    margin: 0px;
    margin-left: 30px;
  }
  @media only screen and (min-width: 1024px) {
    padding: 0 0 20px 0;
    #PlacesTitle {
      font-size: 2.2rem;
      margin: 0;
    }

    #PlacesUndertitle {
      font-size: 0.9rem;
      width: 420px;
      margin: 0;
    }
  }
`;

export const StyledPlacesCardMain = styled.div`
  margin-left: 30px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: scroll;
  gap: 30px;

  @media only screen and (min-width: 1024px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    overflow: hidden;
    margin: auto;
  }
`;
