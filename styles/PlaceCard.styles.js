import styled from "styled-components";

export const StyledPlacecard = styled.div`
  cursor: pointer;
  position: relative;
  height: 565px;
  border-radius: 10px;
  box-shadow: 0px 0px 14px 0px #00000020;
  width: 330px;
  overflow: hidden;
  .PlaceCardImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    margin-bottom: 3px;
  }
  .PlaceCardTitle {
    font-size: 1.5rem;
    text-align: center;
    font-family: "poppins";
    font-weight: bold;
    margin: 0px;
    color: #454545;
  }
  .cardInfo {
    position: relative;
    width: calc(100% - 20px);
    padding: 0 10px;
  }
  .PlaceCardTitleContainer {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px;
    margin-top: 7px;
  }
  .countryContainer {
    position: absolute;
    width: fit-content;
    top: 7px;
    left: 7px;
    z-index: 2;
    background-color: #ffffffd0;
    border-radius: 5px;
    display: flex;
    align-items: center;
  }
  .p {
    display: block;
    width: fit-content;
    height: fit-content;
    color: #555555;
    padding: 4px 7px 4px 4px;
  }
  .placeImageOpacity {
    background-color: #00000020;
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .PlaceCardImageContainer {
    height: 350px;
    position: relative;
  }
  .PlaceCardDesc {
    font-size: 1rem;
    font-family: "poppins";
    font-weight: light;
    width: fit-content;
    height: 100px;
    overflow: hidden;
    margin: 0px;
    margin-top: 7px;
    padding-top: 15px;
    border-top: 2px solid #aa0000;
  }
  .flag {
    height: 21px;
    width: 28px;
    margin-top: 5px;
    margin: 0px;
    display: block;
    padding: 4px;
    border-radius: 8px;
  }
  .CountryLetters {
    color: #918e9b;
    font-size: 14px;
  }
  @media only screen and (min-width: 1024px) {
    width: calc(23% - 8px);
    min-width: 220px;
    height: 512px;
    overflow: hidden;
    margin-bottom: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 14px 0px #00000020;
    .PlaceCardImage {
      width: 100%;
      height: 350px;
      object-fit: cover;
      display: block;
      margin: 0;
    }
    .PlaceCardTitleContainer {
      height: 50px;
    }
    .PlaceCardTitle {
      font-size: 1.5rem;
      font-family: "inter";
      font-weight: bold;
      margin: 0px;
    }

    .cardInfo {
      position: relative;
      padding: 0px 10px;
      width: calc(100% - 20px);
    }
    .PlaceCardDesc {
      font-family: "inter";
      font-weight: light;
      margin: 0px;
      margin-top: 7px;
      padding-top: 10px;
      border-top: 2px solid #aa0000;
      height: 70px;
      overflow: hidden;
      -ms-overflow-style: none; /* Internet Explorer 10+ */
      scrollbar-width: none; /* Firefox */
    }
    .PlaceCardDesc::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }
    .CountryLetters {
      color: #918e9b;
      font-size: 14px;
    }
  }
`;
