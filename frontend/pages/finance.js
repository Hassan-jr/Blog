import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import pic from '../img/robot.png'
import { get_finanace } from "../components/Redux/Actions/Main";
import { useSelector, useDispatch } from "react-redux";
import Sideslider from "../components/Sideslider";
import Spiner from "../components/Spiner";
import All from "../components/All"

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
    bg:  'finance'
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
       <h1 className="font-black text-3xl text-bold text-center pb-2">Top Stories</h1>
        <Sideslider  data={data} />
      </div>

       {/* all posts */}
       <div className='mt-5'>
        <h1 className="text-black text-3xl text-bold">Feeds</h1>
        <All data={data} />
      </div>
      
    </div>
  );
};

export default Finance;
