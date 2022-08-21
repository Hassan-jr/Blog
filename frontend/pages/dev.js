import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import pic from "../img/devpic.png";
import { get_dev } from "../components/Redux/Actions/Main";
import { useSelector, useDispatch } from "react-redux";
import Sideslider from "../components/Sideslider";
import Spiner from "../components/Spiner";
import All from "../components/All";
import Head from "next/head";

const Dev = () => {
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
    bg: "dev ",
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
      <Head>
        <title>{headerprops.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={headerprops.desc} />
      </Head>

      {/* header */}
      <Header {...headerprops} />

      {/* card */}
      <div className="mt-10">
        <h1 className="font-black text-3xl text-bold text-center pb-2">
          Top Stories
        </h1>
        <Sideslider data={data} />
      </div>

      {/* all posts */}
      <div className="mt-5">
        <h1 className="text-black text-3xl text-bold">Feeds</h1>
        <All data={data} />
      </div>
    </div>
  );
};

export default Dev;
