import React from "react";
import Header from "../components/Header";
import pic from "../img/Blockchainpic.png";
import Link from 'next/link'

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
const post = {
  id : 123456677,
  content : "random content",
}

  return (
    <div>
      <Header {...headerprops} />
      <p>
        <Link href="/posts/[]" as={`posts/${post.id}`}>
          click here
        </Link>
      </p>
    </div>
  );
};

export default Blockchain;
