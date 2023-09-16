import React from "react";

import { Shop } from "./Shop";

import "./ShopList.css";

export const ShopList: React.FC = () => {
  return (
    <div className="shop-list">
      <Shop />
      <Shop />
      <Shop />
      <Shop />
      <Shop />
      <Shop />
      <Shop />
    </div>
  );
};
