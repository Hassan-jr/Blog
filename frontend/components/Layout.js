import React from "react";
import Nav from "./Nav";
import { wrapper } from "../components/Redux/store";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Nav />
      {children}
    </div>
  );
};

export default wrapper.withRedux(Layout);
