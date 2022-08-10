import React from "react";
import Header from "../components/Header";
import pic from '../img/financepic.png'

const Finance = () => {
  const headerprops = {
    title: "",
    desc: "",
    pic,
    g1: "",
    g2: "",
    g3: "",
    g4: "",
    g5: "",
    g6: "",
    bg:  'gradient-bg-transactions'
  };

  return (
    <div>
      <Header {...headerprops} />
    </div>
  );
};

export default Finance;
