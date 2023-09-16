import React from "react";

import { SearchField } from "./SearchField";

import "./SearchBar.css";

export const SearchBar: React.FC = () => {
  return (
    <div className="search-bar">
      <SearchField />
    </div>
  );
};
