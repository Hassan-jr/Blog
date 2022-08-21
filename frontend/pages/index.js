import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import pic from "../img/homepic.png";
import Image from "next/image";
import { get_all } from "../components/Redux/Actions/Main";
import { useSelector, useDispatch } from "react-redux";
import Sideslider from "../components/Sideslider";
import Spiner from "../components/Spiner";
import All from "../components/All"

const Home = () => {
  const headerprops = {
    title: "We serve global brands with digital solutions",
    desc: "If you feel the same way as brand manager, digital marketeer Or a brave newbie, Join Our Game We provide soltions that iginites businesses",
    pic,
    g1: "Softwares",
    g2: "Blockchain",
    g3: "Technology",
    g4: "Finance",
    g5: "Health",
    g6: "Progrmamming",
    bg: "home",
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_all());
  }, []);

  const data = useSelector((state) => state.Main.all);
  const isLoading = useSelector((state) => state.Main.loading);

  if (isLoading) {
    return <Spiner />;
  }

  return (
    <div>
      <Header {...headerprops} />

      {/* card */}
      <div className="mt-10">
        <h1 className="font-black text-3xl text-bold text-center pb-2">Top Stories</h1>
        <Sideslider data={data} />
      </div>

      {/* all posts */}
      <div className='mt-5'>
        <h1 className="text-black font-black text-3xl text-bold">Feeds</h1>
        <All data={data} />
      </div>
    </div>
  );
};

export default Home;
