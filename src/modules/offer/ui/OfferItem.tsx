import React from "react";

import { Offer } from "../core";

import "./OfferItem.css";

type OfferItemProps = {
  offer: Offer.Offer;
};

export const OfferItem: React.FC<OfferItemProps> = ({ offer }) => {
  return (
    <div className="offer-item">
      <img className="offer-item__image" src={offer.image} alt={offer.name} />
    </div>
  );
};
