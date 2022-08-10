import React from 'react'
import Header from '../components/Header'
import homepic from "../img/homepic.png";

const Home = () => {
const headerprops = {
  title: 'We serve global brands with digital solutions',
  desc: 'If you feel the same way as brand manager, digital marketeer Or a brave newbie, Join Our Game We provide soltions that iginites businesses',
  homepic,
  g1:  'Softwares',
  g2:  'Blockchain',
  g3:  'Technology',
  g4:  'Finance',
  g5:  'Health',
  g6:  'Progrmamming'
}


  return (
    <div>
      <Header {...headerprops}/>
    </div>
  )
}

export default Home
