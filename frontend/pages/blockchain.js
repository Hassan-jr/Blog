import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import pic from "../img/Blockchainpic.png";
import Link from "next/link";
import { get_blockchain } from "../components/Redux/Actions/Main";
import { useSelector, useDispatch } from "react-redux";
import Sideslider from "../components/Sideslider";
import Spiner from "../components/Spiner";

const Blockchain = () => {
  const headerprops = {
    title: "Get Transitioned From Web 2 to Web 3 Developer",
    desc: "We help current web 2.0 developers to transition to web 3.0 and blockchain space and provide them with an ultimate guide to find a career in the space",
    pic,
    g1: "Smart Contract",
    g2: "Dapp",
    g3: "Defi",
    g4: "Hardat",
    g5: "Ethers",
    g6: "Moralis",
    bg: "gradient-bg-services",
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_blockchain());
  }, []);

  const data = useSelector((state) => state.Main.block);
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

export default Blockchain;
