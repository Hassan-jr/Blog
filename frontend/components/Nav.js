import React, { useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import Image from  'next/image';
import logo from "../img/logo.png"

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="flex flex-row text-white justify-between px-3 pt-1 md:px-0 md:pr-10 md:pt-3 align-middle bg-gray-gradient">
      {/* LOGO */}
      <div className="flex md:-mt-5    ">
        
        <Image 
        className=" object-contain" 
        src={logo}
       
        width="150" 
        height="75"
        />
      </div>
      {/* Nav big screen*/}
      <div>
        <ul className="hidden md:flex flex-row justify-evenly space-x-6">
          <li className=" hover:text-white">
            <Link href="/">Home</Link>
          </li>
          <li className=" hover:text-white">
            <Link href="/dev">Developers</Link>
          </li>
          <li className=" hover:text-white">
            <Link href="/blockchain">Blockchain</Link>
          </li>
          <li className=" hover:text-white">
            <Link href="/tech">Tech</Link>
          </li>
          <li className=" hover:text-white">
            <Link href="/finance">Finance</Link>
          </li>

          <li className=" hover:text-white">
            <Link href="/health">Health</Link>
          </li >
          <li className=" hover:text-white">
            <Link href="/about">About Us</Link>
          </li>
          {/* to be remove */}
          <li className=" hover:text-white">
            <Link href="/post">Post</Link>
          </li>
        </ul>
      </div>
      {/* nav small screen */}
      {menu && (
        <ul className="blue-glassmorphism p-5 font-bold  w-full absolute  flex flex-col md:hidden justify-evenly space-y-5">
          <li className=" hover:text-white">
            <Link href="/">Home</Link>
          </li>
          <li className=" hover:text-white">
            <Link href="/dev">Developers</Link>
          </li>
          <li className=" hover:text-white">
            <Link href="/blockchain">Blockchain</Link>
          </li>
          <li className=" hover:text-white">
            <Link href="/tech">Tech</Link>
          </li>
          <li className=" hover:text-white">
            <Link href="/finance">Finance</Link>
          </li>
          
          <li className=" hover:text-white">
            <Link href="/health">Health</Link>
          </li>
          <li className=" hover:text-white">
            <Link href="/about">About Us</Link>
          </li>
        </ul>
      )}
      {/* Menu */}
      <div className="block md:hidden absolute right-6">
        <h1 className="text-1xl mt-5 z-100 text-white " onClick={toggleMenu}>
          <MenuIcon />
        </h1>
      </div>
    </div>
  );
};

export default Nav;
