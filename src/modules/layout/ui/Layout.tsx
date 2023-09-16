import React from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";

import "./Layout.css";

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout__header">
        <Header />
      </div>

      <div className="layout__body">
        <div className="layout__inner">{children}</div>
      </div>

      {/* <div className="layout__footer">
        <Footer />
      </div> */}
    </div>
  );
};
