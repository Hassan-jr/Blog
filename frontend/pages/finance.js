import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import pic from '../img/robot.png'
import { get_finanace } from "../components/Redux/Actions/Main";
import { useSelector, useDispatch } from "react-redux";
import Sideslider from "../components/Sideslider";
import Spiner from "../components/Spiner";

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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_finanace());
  }, []);

  const data = useSelector((state) => state.Main.finance);
  const isLoading = useSelector((state) => state.Main.loading);

  if (isLoading) {
    return <Spiner />;
  }


  return (
    <div>
      <Header {...headerprops} />

       {/* card */}
       <div className='mt-10'>
        <h1 className="text-white text-3xl text-bold">Top Stories</h1>
        <Sideslider  data={data} />
      </div>
      
    </div>
  );
};

export default Finance;
