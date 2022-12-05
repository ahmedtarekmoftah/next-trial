import React from "react";
import { StyledPlacecard } from "../styles/PlaceCard.styles";
import Link from "next/link";

const PlaceCard = (props) => {
  return (
    <Link href={`/Place/${props.id}`}>
      <StyledPlacecard>
        <div className="countryContainer">
          <img className="flag" src="/eg.svg" alt="eg" />
          <p className="p"> &#183; EG</p>
        </div>
        <div className="PlaceCardImageContainer">
          <div className="placeImageOpacity"></div>
          <img
            className="PlaceCardImage"
            src={`/${props.image}`}
            alt={props.title}
          />
        </div>
        <div className="cardInfo">
          <div className="PlaceCardTitleContainer">
            <p className="PlaceCardTitle">{props.title}</p>
          </div>
          <p className="PlaceCardDesc">{props.description}</p>
        </div>
      </StyledPlacecard>
    </Link>
  );
};
export default PlaceCard;
