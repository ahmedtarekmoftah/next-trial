import styled from "styled-components";

export const StyledPlacecard = styled.div`
  cursor: pointer;
  #PlaceCardImage {
    width: 250px;
    height: 350px;
    object-fit: cover;
    display: block;
    margin-bottom: 3px;
  }
  #PlaceCardTitle {
    font-size: 1rem;
    font-family: "poppins";
    font-weight: bold;
    width: fit-content;
    margin: 0px;
    margin-top: 5px;
  }
  #PlaceCardDesc {
    font-size: 1rem;
    font-family: "poppins";
    font-weight: light;
    width: fit-content;
    margin: 0px;
    height: 200px;
    overflow: scroll;
  }
  #flag {
    height: 18px;
    width: 24px;
    margin-top: 5px;
    margin: 0px;
    display: inline-block;
    position: relative;
    top: 3px;
  }
  #CountryLetters {
    color: #918e9b;
    font-size: 14px;
  }
  @media only screen and (min-width: 1024px) {
    width: calc(20% - 8px);
    min-width: 220px;
    margin-bottom: 10px;
    #PlaceCardImage {
      width: 100%;
      height: 350px;
      object-fit: cover;
      display: block;
      margin: 0;
    }
    #PlaceCardTitle {
      font-size: 1rem;
      font-family: "inter";
      font-weight: bold;
      margin: 0px;
      margin-top: 7px;
    }
    #PlaceCardDesc {
      margin-top: 5px;
      font-family: "inter";
      font-weight: light;
      width: 100%;
      margin: 0px;
      margin-top: 3px;
      height: 150px;
      overflow: scroll;
      -ms-overflow-style: none; /* Internet Explorer 10+ */
      scrollbar-width: none; /* Firefox */
    }
    #PlaceCardDesc::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }
    #CountryLetters {
      color: #918e9b;
      font-size: 14px;
    }
  }
`;
