import React from "react";
import Image from "next/image";
import Link from "next/link";

const Allcard = ({ item }) => {

  return (
    <Link href='/posts/[]' as={`posts/${item._id}`}>
    <div className='white-glassmorphism mt-1 rounded-md flex flex-row justify-center align-top w-full p-2 text-white'>
      <div>
        <Image
          src={item.mainUrl}
          width="200"
          height="100"
          className="object-fill mt-0"
        />
      </div>

      <div className='flex-1 pl-3'>
        <h1 className="text-xl md:text-4xl text-bold">{item.mainTitle}</h1>
        {/* large */}
        <h1 className='hidden md:flex'>
          {item.posts[0].content.slice(0, 400)}.....<span className="text-cyan-400">Read More</span>
        </h1>
           {/* small */}
        <h1 className='flex flex-col md:hidden'>
          {item.posts[0].content.slice(0, 60)}....
          <p className="text-cyan-400">Read More</p>
        </h1>
      </div>
    </div>
    </Link>
  );
};

export default Allcard;
