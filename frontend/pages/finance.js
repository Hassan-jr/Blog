import React from "react";
import Header from "../components/Header";
import pic from '../img/robot.png'

const Finance = () => {
  const headerprops = {
    title: "",
    desc: "",
    pic,
    g1: "TEST  1",
    g2: "TEST  1",
    g3: "TEST  1",
    g4: "TEST  1",
    g5: "TEST  1",
    g6: "TEST  1",
    bg:  'gradient-bg-transactions'
  };

  return (
    <div>
      <Header {...headerprops} />
    </div>
  );
};

export default Finance;
