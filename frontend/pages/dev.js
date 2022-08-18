import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import pic from "../img/devpic.png";
import {
  get_all,
  get_blockchain,
  get_one,
} from "../components/Redux/Actions/Main";
import { useSelector, useDispatch } from "react-redux";

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
    dispatch(get_one("62fb7da7b95c705c0d3ee72a"));
  }, []);

  const data = useSelector((state) => state.Main.onePost);
  

  return (
    <div>
      <Header {...headerprops} />
      
    </div>
  );
};

export default dev;
