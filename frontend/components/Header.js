import React from "react";
import Image from "next/image";
import homepic from "../img/homepic.png";
import Link from 'next/link';

const Header = () => {
  const commonStyles =
    "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400  font-bold text-white";

  return (
    <div className="md:flex flex-row px-5 md:px-20 justify-center items-center nav">
      {/* text */}
      <div className="md:w-96 w-full ">
        <h1 className="font-bold text-3xl text-gradient mb-6">
          We serve global brands with digital solutions
        </h1>
        <p className="logobox p-3 ">
          If you feel the same way as brand manager, digital marketeer Or a
          brave newbie, Join Our Game We provide soltions that iginites
          businesses
        </p>
        {/* the grid table */}
        <div className="grid grid-cols-3 md:grid-col-2 w-full mt-10 mb-10 blue-glassmorphism">
          <div className={`rounded-tl-2xl ${commonStyles}`}>
            <Link href="/dev">Developer</Link>
          </div>
          <div className={` ${commonStyles}`}>
          <Link href="/tech">Tech</Link>
          </div>
          <div className={`rounded-tr-2xl ${commonStyles}`}>
          <Link href="/finace">Finance</Link>
          </div>
          <div className={`rounded-bl-2xl ${commonStyles}`}>
          <Link href="/health">Health</Link>
          </div>
          <div className={` ${commonStyles}`}>
          <Link href="/about">About Us</Link>
          </div>
          <div className={`rounded-br-2xl ${commonStyles}`}>
          <Link href="/">Home</Link>
          </div>
        </div>
      </div>
      <Image src={homepic} />
    </div>
  );
};

export default Header;
