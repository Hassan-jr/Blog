import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import pic from "../img/devpic.png";
import { get_all, get_blockchain } from "../components/Redux/Actions/Main";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

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
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_blockchain());
  }, []);

 
  const state = useSelector((state) => state.Main.block);
  console.log("state", state);
  

  // console.log(data);

  return (
    <div>
      <Header {...headerprops} />
      <h1>{state.length > 0 && state[0].mainTitle}</h1>
    </div>
  );
};

export default dev;
