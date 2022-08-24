import React from "react";
import Nav from "./Nav";
import { wrapper } from "../components/Redux/store";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      {children}
      <Footer/>
    </div>
  );
};

export default wrapper.withRedux(Layout);
