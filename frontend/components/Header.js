import React from 'react'
import Image from 'next/image'
import homepic from "../img/homepic.png"

const Header = () => {
  return (
    <div className="flex flex-row px-20 justify-center items-center nav">
        {/* text */}
        <div className="w-96  ">
            <h1 className="font-bold text-3xl mb-6">We serve global brands with digital solutions</h1>
            <p className="white-glassmorphism p-3 ">If you feel the same way as brand manager, digital marketeer Or a brave newbie, Join Our Game
            We provide soltions that iginites businesses</p>
        </div>
        <Image src={homepic}/>
    </div>
  )
}

export default Header