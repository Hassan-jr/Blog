import React from "react";
import Header from "../components/Header";
import pic from '../img/robot.png'

const Finance = () => {
  const headerprops = {
    title: "Advice for the New Financial Professional: Know Your Own Value",
    desc: "If you're in a position where you're saving is too low and you find yourself constantly struggling to make ends meet, then it might be time to turn your attention towards seeking our financial help.",
    pic,
    g1: "Investing",
    g2: "Startup Ideas",
    g3: "Budgeting",
    g4: "Financial Planning",
    g5: "Side Hustling",
    g6: "Financial tools",
    bg:  'gradient-bg-transactions'
  };

  return (
    <div>
      <Header {...headerprops} />
    </div>
  );
};

export default Finance;
