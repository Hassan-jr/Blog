import React from "react";
import Image from "next/image";



const Header = (prop) => {
  const commonStyles =
    "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400  font-bold text-white";

  return (
    <div className="md:flex flex-row px-5 md:px-20 justify-center items-center nav">
      {/* text */}
      <div className="md:w-96 w-full ">
        <h1 className="font-bold text-3xl text-gradient mb-6">{prop.title}</h1>
        <p className="logobox p-3 ">{prop.desc}</p>
        {/* grid  table title */}
        <div>
          <h1 className="font-bold text-3xl text-gradient mt-5">
            Area Of Specializations
          </h1>
        </div>
        {/* the grid table */}
        <div className="grid grid-cols-3 md:grid-col-2 w-full mt-5 mb-10 blue-glassmorphism">
          <div className={`rounded-tl-2xl ${commonStyles}`}>
            <p> {prop.g1} </p>
          </div>
          <div className={` ${commonStyles}`}>
            <p> {prop.g2}</p>
          </div>
          <div className={` rounded-tr-2xl ${commonStyles}`}>
            <p>{prop.g3}</p>
          </div>
          <div className={`rounded-bl-2xl ${commonStyles}`}>
            <p>{prop.g4}</p>
          </div>
          <div className={` ${commonStyles}`}>
            <p>{prop.g5}</p>
          </div>
          <div className={` rounded-br-2xl ${commonStyles}`}>
            <p>{prop.g6}</p>
          </div>
          {/* <div className={`rounded-br-2xl ${commonStyles}`}>
          <Link href="/">Home</Link>
          </div> */}
        </div>
      </div>
      <div>
        <Image src={prop.homepic} />
      </div>
    </div>
  );
};

export default Header;
