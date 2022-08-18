import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import pic from '../img/techpic.svg'
import { get_tech } from "../components/Redux/Actions/Main";
import { useSelector, useDispatch } from "react-redux";
import Sideslider from "../components/Sideslider";
import Spiner from "../components/Spiner";

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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_tech());
  }, []);
  
  const data = useSelector((state) => state.Main.tech)
  const isLoading = useSelector((state) => state.Main.loading);

  if (isLoading) {
    return <Spiner />;
  }


  return (
    <div className="h-80">
      <Header {...headerprops} />

        {/* card */}
      <div className='mt-10'>
        <h1 className="text-white text-3xl text-bold">Top Stories</h1>
        <Sideslider data={data} />
      </div>
    </div>
  );
};

export default Tech;
