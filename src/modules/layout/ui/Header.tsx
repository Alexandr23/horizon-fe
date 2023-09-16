import React from "react";

import { Logo } from "../../logo";
import { SearchBar } from "../../search";
import { UserCard } from "../../user";

import "./Header.css";

export const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="layout__inner">
        <div className="header__inner">
          <Logo />
          <SearchBar />
          <UserCard />
        </div>
      </div>
    </div>
  );
};
