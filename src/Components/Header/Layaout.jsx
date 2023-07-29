import React from "react";
import NavMenu from "./navMenu";

const Layout = ({ children }) => {
  return (
    <div>
      <NavMenu />
      <div>{children}</div>
    </div>
  );
};

export default Layout;