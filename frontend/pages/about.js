import React from 'react'
import Header from "../components/Header";
import pic from "../img/blockchainpic.png";
import Image from  'next/image';

const About = () => {
  const headerprops = {
    title: "ABDILADIF HASSAN ADAN",
    desc: "I am a Well-qualified Full Stack, Cross Platform and Blockchain Developer familiar with wide range of programming utilities and languages. Knowledgeable of backend and frontend development requirements. Handles any part of process with ease and a Collaborative team player with excellent technical abilities. ",
      pic,
    g1: "Smart Contract",
    g2: "Dapp",
    g3: "Defi",
    g4: "Hardat",
    g5: "Ethers",
    g6: "Moralis",
    bg: "blockchains",
  };
  return (
    <div>
       <Header {...headerprops} />
    </div>
  )
}

export default About