import React from 'react'
import Header from "../components/Header";
import pic from '../img/healthpic.png'


const Health = () => {

  const headerprops = {
    title: "",
    desc: "",
    pic,
    g1: "",
    g2: "",
    g3: "",
    g4: "",
    g5: "",
    g6: "",
  };


  return (
    <div>
      <Header {...headerprops} />
    </div>
  )
}

export default Health