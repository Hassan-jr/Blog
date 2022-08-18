import React, { useEffect, useState } from "react";
import Header from '../components/Header'
import pic from "../img/homepic.png";
import Image from "next/image"
import { get_all } from "../components/Redux/Actions/Main";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {

const headerprops = {
  title: 'We serve global brands with digital solutions',
  desc: 'If you feel the same way as brand manager, digital marketeer Or a brave newbie, Join Our Game We provide soltions that iginites businesses',
  pic,
  g1:  'Softwares',
  g2:  'Blockchain',
  g3:  'Technology',
  g4:  'Finance',
  g5:  'Health',
  g6:  'Progrmamming',
  bg: 'bg-gray-gradient'
}

const dispatch = useDispatch();

useEffect(() => {
  dispatch(get_all());
}, []);

const data = useSelector((state) => state.Main.all)
console.log(data);


  return (
    <div>
      <Header {...headerprops}/>
     { data.length  > 0 && <Image src={data[0].mainUrl}
       width  = "1500"
      height = "500"
      className = 'object-contain'
      />}
    </div>
  )
}

export default Home
