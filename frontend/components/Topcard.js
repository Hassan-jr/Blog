import React from "react";
import Image from "next/image";

const Topcard = ({ item }) => {
  return (
    <div className=" flex flex-col space-y-auto  bg-neutral-500  w-52 md:w-80 h-72 md:h-80 border-solid border-2 rounded-md border-neutral-400 md:p-5 relative">
      <div>
        <Image
          src={item.mainUrl}
          width="350"
          height="200"
          className="object-fill mt-0"
        />
      </div>
      <div className="">
        <h1 className=" text-slate-50 text-xl text-bold">{item.mainTitle}</h1>
        <h1 className='text-cyan-400'>
          {item.posts[0].content.slice(0, 50)}.....<span className="text-slate-50">Read More</span>
        </h1>
      </div>
      <h1 className=" text-slate-50 text-bold absolute bottom-0">
        Created At: &nbsp;&nbsp; <span className='text-cyan-400'> {item.createdAt.slice(0, 10)} </span>
      </h1>
    </div>
  );
};

export default Topcard;
