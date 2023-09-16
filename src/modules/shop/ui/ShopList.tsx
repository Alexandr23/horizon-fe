import React from "react";

import { Shop } from "../core";
import { ShopItem } from "./ShopItem";

import "./ShopList.css";

export const ShopList: React.FC = () => {
  return (
    <div className="shop-list">
      {Shop.MOCKS.map((shop) => {
        return <ShopItem key={shop.id} shop={shop} />;
      })}
    </div>
  );
};
