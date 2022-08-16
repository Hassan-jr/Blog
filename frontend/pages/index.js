import React from 'react'
import Header from '../components/Header'
import pic from "../img/homepic.png";
import Image from "next/image"

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


  return (
    <div>
      <Header {...headerprops}/>
      <Image src='https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
      width  = "1500"
      height = "500"
      className = 'object-contain'
      />
    </div>
  )
}

export default Home
