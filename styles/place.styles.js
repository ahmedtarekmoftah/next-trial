import styled from "styled-components";

export const StyledPlaceData = styled.div`
  width: 75%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: #454545;
  margin-top: 20px;
  #infoContainer {
    order: 1;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  #topic {
    order: 2;
    margin-top: 30px;
    width: 100%;
    #placeTopicTitle {
      font-family: "inter", sans-serif;
      color: #454545;
      font-size: 2rem;
      margin-top: 30px;
      font-weight: 600;
      margin: 0px;
      margin-bottom: 10px;
    }
  }
  #info {
    width: 100%;
    border-radius: 5px;
    #placeInfoTitle {
      width: 100%;
      font-family: "inter", sans-serif;
      color: #454545;
      font-size: 2rem;
      font-weight: 600;
      margin-top: 30px;
      padding: 5px 0px;
      margin: 0px;
      margin-bottom: 10px;
    }
  }
  #infoData {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 10px;
    .infoItem {
      display: block;
      list-style: none;
      font-size: 1.2rem;
      box-shadow: 0px 0px 3px 0px #00000033;
      border-radius: 7px;
      padding: 5px 10px;
    }
  }
  @media only screen and (min-width: 1024px) {
    width: 75%;
    gap: 25px;
    margin-top: 30px;
    #infoContainer {
      order: 2;
      width: 30%;
      display: flex;
      justify-content: center;
    }
    #topic {
      order: 1;
      width: 50%;
      margin-top: 0px;
      #infoContainer {
        font-size: 2.5rem;
        margin-top: 30px;
      }
      #placeTopicTitle {
        font-size: 2.5rem;
      }
    }
    #info {
      padding: 0px 25px;
      border-radius: 5px;
    }
  }
`;
