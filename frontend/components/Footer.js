import React from "react";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className="w-full footer  mt-auto  flex flex-col items-center justify-center space-y-3 pb-5">
      {/* Top links and contacts*/}
      <div className="flex flex-row flex-nowrap  text-white font-semibold w-full justify-around">
        {/* links */}
        <div className="flex flex-col  items-center justify-center   w-full">
          <h1 className="text-2xl">Links</h1>
          <div className="flex flex-row items-center justify-around w-full">
            <ul className="">
              <li className="p-2 hover:bg-red-400 text-sm md:text-xl">
                <Link href="/">Home</Link>
              </li>
              <li className=" p-2 hover:bg-red-400 text-sm md:text-xl">
                <Link href="/dev">Developers</Link>
              </li>
              <li className=" p-2 hover:bg-red-400 text-sm md:text-xl">
                <Link href="/blockchain">Blockchain</Link>
              </li>
            </ul>

            <ul>
              <li className=" p-2 hover:bg-red-400 text-sm md:text-xl">
                <Link href="/tech">Tech</Link>
              </li>
              <li className=" p-2 hover:bg-red-400 text-sm md:text-xl">
                <Link href="/finance">Finance</Link>
              </li>
              <li className=" p-2 hover:bg-red-400 text-sm md:text-xl">
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* contact */}
        <div className="w-full flex flex-col  items-center  ">
          <h1 className="text-2xl ">Contacts</h1>
          <ul>
            <li className=" p-2 hover:bg-red-400 text-sm md:text-xl">
              Email: &nbsp;&nbsp; &nbsp;&nbsp; abdiladifhassan115@gmail.com
            </li>
            <li className=" p-2 hover:bg-red-400 text-sm md:text-xl">
              Phone NO: &nbsp;&nbsp; +254725151165
            </li>
            <li className=" p-2 hover:bg-red-400 text-sm md:text-xl">
              Website: &nbsp;&nbsp; <a href="https://www.hassanjr.com/">hassanjr.com</a>
            </li>
          </ul>
        </div>
      </div>

     

      {/*sciols links */}
      <div className="w-1/3 flex flex-row flex-nowrap justify-evenly">
        <a href="https://github.com/Hassan-jr?tab=repositories">
          <GitHubIcon className="text-white hover:text-red-400" />
        </a>
        <a href="https://www.linkedin.com/in/abdiladif-hassan-524168213">
          <LinkedInIcon className="text-white hover:text-red-400" />
        </a>
        <a href="https://twitter.com/Hassan_jr_1?t=1Smv-fiNx7iVvsFEoyXvPg&s=09">
          <TwitterIcon className="text-white hover:text-red-400" />
        </a>
        <a href="https://www.facebook.com/updiladiph.hersonadan">
          <FacebookIcon className="text-white hover:text-red-400" />
        </a>
        <a href="https://instagram.com/hassan_jr_1?utm_source=qr">
          <InstagramIcon className="text-white hover:text-red-400" />
        </a>
      </div>

      {/* line */}
      <hr className="bg-white  w-3/4 h-0.5" />
      {/* copyright */}
      <div>
        <h1 className='text-sm text-yellow-50'>
            <a href="https://www.hassanjr.com/">hassanjr.com</a><span> © 2021 - {currentYear} All rights reserved</span></h1>
      </div>
    </div>
  );
};

export default Footer;
