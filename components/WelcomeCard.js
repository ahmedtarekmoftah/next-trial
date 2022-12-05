import React, { useState, useEffect } from "react";
import {
  StyledWelcomeCard,
  StyledWelcomeCardCharacter,
  StyledWelcomeCardPlace,
  StyledWelcomeCardContainer,
} from "../styles/WlcomeCard.styles";
import data from "../data";

const WelcomeCard = (props) => {
  const [places, SetPlaces] = useState(data);
  const random = Math.floor(Math.random() * places.length);
  const [current, SetCurrent] = useState(places[0]);

  useEffect(() => {
    SetCurrent(places[random]);
  }, []);
  useEffect(() => {
    SetPlaces((previous) => {
      return previous.map((place) => {
        return place.id == current.id
          ? { ...place, order: "fill" }
          : { ...place, order: "nofill" };
      });
    });
  }, [current]);

  function handleClick() {
    SetCurrent((previous) => {
      for (let i = 0; i < places.length; i++) {
        if (places[i].id === previous.id) {
          if (i == places.length - 1) {
            return places[0];
          } else {
            return places[i + 1];
          }
        }
      }
    });
  }

  const order = places.map((place) => {
    return place.order === "fill" ? (
      <img
        className="WelcomeCardPlaceOrderIcon"
        src="/circleFill.svg"
        alt=""
        key={place.id}
      />
    ) : (
      <img
        className="WelcomeCardPlaceOrderIcon"
        src="/circle.svg"
        alt=""
        key={place.id}
      />
    );
  });
  const propesi = props.largeImg;
  return (
    <StyledWelcomeCardContainer>
      <StyledWelcomeCard>
        <StyledWelcomeCardPlace onClick={handleClick} img={propesi}>
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={`/${current.wideImage}`}
              id="wide"
            />
            <source media="(min-width: 300px)" src={`/${current.image}`} />
            <img
              id="WelcomeCardPlaceImage"
              srcSet={`/${current.image}`}
              alt="ahmedibntulun mosque"
            />
          </picture>
          <div id="WelcomeCardPlaceOpacity">
            <h1 id="WelcomeCardPlaceTitle">{current.title}</h1>
            <p id="WelcomeCardPlaceDesc">{current.description}</p>
            <div id="WelcomeCardPlacePreOrder">
              <div id="WelcomeCardPlaceOrder">{order}</div>
            </div>
          </div>
        </StyledWelcomeCardPlace>
        {props.character && (
          <StyledWelcomeCardCharacter>
            <div id="WelcomeCardCharacterCountry">
              <img
                id="WelcomeCardCharacterCountryFlag"
                src="/eg.svg"
                alt="eg"
              />
              <span id="WelcomeCardCharacterCountryLetters">
                &nbsp;&#183; EG
              </span>
            </div>
            <img
              id="WelcomeCardCharacterImage"
              src={`/m1.jpg`}
              alt="ahmedibntulun mosque"
            />
            <h1 id="WelcomeCardCharacterTitle">Masjid of Mohamed Ali</h1>
            <p id="WelcomeCardCharacterDesc">{current.description}</p>
          </StyledWelcomeCardCharacter>
        )}
      </StyledWelcomeCard>
    </StyledWelcomeCardContainer>
  );
};
export default WelcomeCard;
