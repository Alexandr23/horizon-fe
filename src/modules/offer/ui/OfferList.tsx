import React from "react";

import { Offer } from "../core";
import { OfferItem } from "./OfferItem";

import "./OfferList.css";

export const OfferList: React.FC = () => {
  return (
    <div className="offer-list">
      {[...Offer.MOCKS, ...Offer.MOCKS.reverse(), ...Offer.MOCKS].map(
        (offer, index) => {
          return <OfferItem key={`${offer.id}_${index}`} offer={offer} />;
        }
      )}
    </div>
  );
};
