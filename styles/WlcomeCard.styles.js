import styled from "styled-components";
import React from "react";

export const StyledWelcomeCard = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 0px;

  @media screen and (min-width: 1024px) {
  }
`;
export const StyledWelcomeCardContainer = styled.div`
  margin: auto;
  margin-top: 55px;

  @media only screen and (min-width: 1024px) {
    width: calc(100% - 15rem);
    margin-top: 67px;
    margin-bottom: 20px;
  }
`;

export const StyledWelcomeCardPlace = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  color: #fff;
  #WelcomeCardPlaceImage {
    width: 100%;
    height: 600px;
    object-fit: cover;
    position: absolute;
  }
  #WelcomeCardPlaceOpacity {
    position: relative;
    background-color: #0000003d;
    width: 100%;
    height: 600px;
    overflow: overlay;
  }
  #WelcomeCardPlaceOrder {
    display: flex;
    justify-content: center;
    gap: 15px;
    img {
      color: #fff;
    }
  }
  #WelcomeCardPlacePreOrder {
    width: 100%;
    position: absolute;
    top: 92%;
  }
  .WelcomeCardPlaceOrderIcon {
    width: 10px;
    height: 10px;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  #WelcomeCardPlaceTitle {
    font-size: 1.6rem;
    font-family: "inter", sans-serif;
    font-weight: 700;
    margin-left: 20px;
    margin-top: 20px;
    width: fit-content;
  }
  #WelcomeCardPlaceDesc {
    font-size: 0.9rem;
    font-family: "inter", sans-serif;
    font-weight: 400;
    margin: 0px;
    margin-left: 20px;
    min-width: 270px;
    width: 60%;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  @media screen and (min-width: 1024px) {
    width: ${(props) => (props.img ? "90%" : "calc( 100% - 320px )")};
    #WelcomeCardPlacePreOrder {
      top: 90%;
    }
    #WelcomeCardPlaceTitle {
      margin-bottom: 5px;
    }
    #WelcomeCardPlaceDesc {
      max-width: 350px;
    }
  }
`;

export const StyledWelcomeCardCharacter = styled.div`
  display: none;
  #WelcomeCardCharacterImage {
    width: 100%;
    height: 450px;
    object-fit: cover;
    display: block;
  }
  #WelcomeCardCharacterCountry {
    display: flex;
    align-items: baseline;
  }
  #WelcomeCardCharacterCountryFlag {
    width: 20px;
  }

  #WelcomeCardCharacterTitle {
    font-size: 1.1rem;
    font-family: "inter", sans-serif;
    font-weight: 700;
    margin-top: 5px;
    margin-right: 15px;
  }
  #WelcomeCardCharacterDesc {
    font-size: 0.9rem;
    font-family: "inter", sans-serif;
    font-weight: 400;
    margin-top: 3px;
    height: 120px;
    overflow-y: scroll;
    -moz-user-select: text;
    -khtml-user-select: text;
    -webkit-user-select: text;
    -ms-user-select: text;
    user-select: text;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
  }
  #WelcomeCardCharacterDesc::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
  #WelcomeCardCharacterCountryLetters {
    color: #918e9b;
    font-size: 0.9rem;
    position: relative;
  }
  @media screen and (min-width: 1024px) {
    color: #454545;
    width: 300px;
    display: block;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

    #WelcomeCardCharacterCountry {
      height: 30px;
    }

    #WelcomeCardCharacterTitle {
      font-size: 1.1rem;
      font-family: "inter", sans-serif;
      font-weight: 700;
      margin-top: 5px;
      margin-right: 15px;
    }
    #WelcomeCardCharacterDesc {
      margin-top: 0px;
    }

    #WelcomeCardCharacterCountryLetters {
      top: -3px;
    }
  }
`;
