import React from 'react'
import Header from "../components/Header";

const dev = () => {
  const headerprops = {
    title: '',
    desc: '',
    img: '',
    g1:  '',
    g2:  '',
    g3:  '',
    g4:  '',
    g5:  '',
    g6:  ''
  }
  return (
    <div>
      <Header {...headerprops} />
    </div>
  )
}

export default dev