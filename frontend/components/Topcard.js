import React from "react";
import Link from 'next/link';
import Image from "next/image";

const Topcard = ({ item }) => {
  return (
    <div className=" flex flex-col space-y-auto w-40 md:w-60 h-64 md:h-80  rounded-md  md:p-1 relative">
      <div>
        <Image
          src={item.mainUrl}
          width="350"
          height="200"
          className="object-fill mt-0 rounded-b-lg"
          alt={item.mainTitle || ''} 
        />
      </div>
      <div className="">
        <h1 className="  text-xl font-semibold">{item.mainTitle}</h1>
        <h1 className='hidden md:block'>
          {item.posts[0].content.slice(0, 50)}.....<span className="text-blue-500"><Link href='/posts/[]' as={`posts/${item._id}`} >Read More</Link></span>
        </h1>
      </div>
      <Link href='/posts/[]' as={`posts/${item._id}`} >
      <p className="flex md:hidden text-blue-500">Read More</p>
        </Link>
      
      <h1 className="text-sm text-bold absolute bottom-0 bg-blue-700 p-2 rounded-full text-white">
        Created: <span className=''> {item.createdAt.slice(0, 10)} </span>
      </h1>
    </div>
  );
};

export default Topcard;
