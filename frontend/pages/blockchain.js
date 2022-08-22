import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import pic from "../img/blockchainpic.png";
import Link from "next/link";
import { get_blockchain } from "../components/Redux/Actions/Main";
import { useSelector, useDispatch } from "react-redux";
import Sideslider from "../components/Sideslider";
import Spiner from "../components/Spiner";
import All from "../components/All"
import Head from 'next/head'

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
    bg: "blockchains",
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
      <Head>
        <title>{headerprops.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name='description' content={headerprops.desc}/>
      </Head>
      <Header {...headerprops} />

       {/* card */}
       <div className='mt-10'>
       <h1 className="font-black text-gradient text-3xl text-bold text-center pb-2">Top Stories</h1>
        <Sideslider  data={data} />
      </div>

       {/* all posts */}
       <div className='mt-5'>
        <h1 className="text-black text-3xl font-bold text-gradient">Feeds</h1>
        <All data={data} />
      </div>

    </div>
  );
};

export default Blockchain;
