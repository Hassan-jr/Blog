import React from "react";
import Header from "../components/Header";

import pic from '../img/techpic.svg'

const Tech = () => {
  const headerprops = {
    title: "",
    desc: "From newbies to professionals, we will help you to transform from analogue or semi-digitalised world to the  real digital world",
    pic,
    g1: "AI",
    g2: "IoT",
    g3: "IT",
    g4: "ML",
    g5: "CS",
    g6: "Cybersecurity",
    bg:  'gradient-bg-footer'
  };

  return (
    <div className="h-80">
      <Header {...headerprops} />
      ljlj
      lksdjflkdj
      lksdjflkdj
    </div>
  );
};

export default Tech;
