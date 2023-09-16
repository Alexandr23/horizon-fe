import React from "react";

import { Shop } from "../core";

import "./ShopItem.css";

type ShopItemProps = {
  shop: Shop.Shop;
};

export const ShopItem: React.FC<ShopItemProps> = ({ shop }) => {
  return (
    <div className="shop-item">
      <img className="shop-item__image" src={shop.image} alt={shop.name} />
    </div>
  );
};
