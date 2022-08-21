import React from "react";
import Image from "next/image";
import Link from "next/link";


const Allcard = ({ item }) => {

 

  return (

    <div className= ' white-glassmorphism mt-1 rounded-md flex flex-row justify-center align-top w-full p-2 text-black'>
      <div className='relative w-28 h-24 md:h-32 md:w-32' >
        <Image
          src={item.mainUrl}
          layout='fill'
          className="object-fill mt-0"
          alt={item.mainTitle || ''}
        />
      </div>


      <div className='flex-1 pl-3'>
        <h1 className=" md:text-2xl font-bold">{item.mainTitle}</h1>
        {/* large */}
        <h1 className='hidden md:block '>
          {item.posts[0].content.slice(0, 400)}.....<span className="text-blue-500"><Link href='/posts/[]' as={`posts/${item._id}`} >Read More</Link></span>
        </h1>
           {/* small */}
        <h1 className='block md:hidden text-sm'>
          {item.posts[0].content.slice(0, 60)}....
          <span className="text-cyan-400"><Link href='/posts/[]' as={`posts/${item._id}`} >Read More</Link></span>
        </h1>
      </div>
    </div>
    
  );
};

export default Allcard;
