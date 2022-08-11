import React from "react";
import Header from "../components/Header";
import pic from "../img/devpic.png";
import { get_all } from "../components/Redux/Actions/Main";
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
  dispatch(get_all());

  const state = useSelector((state) => state.Main.all);
  console.log("STATE", state);
  //const val = prop.get_all()

  //console.log("form prop", props);
  //console.log("ffrom fun ", value);

  return (
    <div>
      <Header {...headerprops} />
      <h1>{state[0]}</h1>
    </div>
  );
};

export default dev;
