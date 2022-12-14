import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import pic from "../img/techpic.svg";
import { get_tech } from "../components/Redux/Actions/Main";
import { useSelector, useDispatch } from "react-redux";
import Sideslider from "../components/Sideslider";
import Spiner from "../components/Spiner";
import All from "../components/All";
import Head from "next/head";

const Tech = () => {
  const headerprops = {
    title: "The future of technology starts here",
    desc: "From newbies to professionals, we will help you to transform from analogue or semi-digitalised world to the  real digital world",
    pic,
    g1: "AI",
    g2: "IoT",
    g3: "IT",
    g4: "ML",
    g5: "CS",
    g6: "Cybersecurity",
    bg: "tech",
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_tech());
  }, []);

  const data = useSelector((state) => state.Main.tech);
  const isLoading = useSelector((state) => state.Main.loading);

  if (isLoading) {
    return <Spiner />;
  }

  return (
    <div>
      <Head>
        <title>{headerprops.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={headerprops.desc} />
      </Head>

      <Header {...headerprops} />

      {/* card */}
      <div className="mt-10">
        <h1 className="font-black text-3xl text-gradient text-center pb-2">
          Top Stories
        </h1>
        <Sideslider data={data} />
      </div>

      {/* all posts */}
      <div className="mt-5">
      <h1 className="text-black text-gradient text-3xl font-bold">Feeds</h1>
        <All data={data} />
      </div>
    </div>
  );
};

export default Tech;
