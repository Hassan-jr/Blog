import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import pic from "../img/devpic.png";
import {
  get_dev
} from "../components/Redux/Actions/Main";
import { useSelector, useDispatch } from "react-redux";
import Sideslider from "../components/Sideslider";
import Spiner from "../components/Spiner";
import All from "../components/All"

const dev = (props) => {

  const headerprops = {
    title: "We live and breathe software development",
    desc: "Welcome to where developers turn into proffesionals programmers, get instat help for any programming challenge and get assisted in building your projects ",
    pic,
    g1: "Frontend Dev",
    g2: "Backend Dev",
    g3: "Databases",
    g4: "Programming",
    g5: "Software Deve",
    g6: "Api's",
    bg: "gradient-bg-welcome ",
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_dev());
  }, []);

  const data = useSelector((state) => state.Main.dev);
  
  const isLoading = useSelector((state) => state.Main.loading);
  
  if (isLoading) {
    return <Spiner />;
  }

  return (
    <div>
      {/* header */}
      <Header {...headerprops} />

      {/* card */}
      <div className='mt-10'>
        <h1 className="text-white text-3xl text-bold">Top Stories</h1>
        <Sideslider data={data} />
      </div>

       {/* all posts */}
       <div>
        <h1 className="text-white text-3xl text-bold">Feeds</h1>
        <All data={data} />
      </div>
      
    </div>
  );
};

export default dev;
