import react from "react";
import data from "../data";
import {
  StyledPlacesCards,
  StyledPlacesCardsHeader,
  StyledPlacesCardMain,
} from "../styles/PlacesCards.styles";
import PlaceCard from "./PlaceCard";

const PlacesCards = () => {
  const cards = data.map((card) => {
    return (
      <PlaceCard
        key={card.id}
        id={card.id}
        title={card.title}
        image={card.image}
        description={card.description}
      />
    );
  });
  return (
    <StyledPlacesCards>
      <StyledPlacesCardsHeader>
        <h2 id="PlacesTitle">Places</h2>
        <p id="PlacesUndertitle">
          discover new places in all the arabian and islamic countries.
        </p>
      </StyledPlacesCardsHeader>
      <StyledPlacesCardMain>{cards}</StyledPlacesCardMain>
    </StyledPlacesCards>
  );
};
export default PlacesCards;
