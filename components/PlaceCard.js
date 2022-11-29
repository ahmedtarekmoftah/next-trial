import React from "react";
import { StyledPlacecard } from "../styles/PlaceCard.styles";
import Link from "next/link";

const PlaceCard = (props) => {
  return (
    <Link href={`/Place/${props.id}`}>
      <StyledPlacecard>
        <img id="PlaceCardImage" src={`/${props.image}`} alt={props.title} />
        <div>
          <img id="flag" src="/eg.svg" alt="eg" />
          <span id="CountryLetters">&nbsp; &#183; EG</span>
        </div>
        <div>
          <p id="PlaceCardTitle">{props.title}</p>
          <p id="PlaceCardDesc">{props.description}</p>
        </div>
      </StyledPlacecard>
    </Link>
  );
};
export default PlaceCard;
