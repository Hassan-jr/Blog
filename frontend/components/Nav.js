import React, { useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import Image from "next/image";
import logo from "../img/logo.png";

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="flex flex-row text-white justify-between px-3 pt-1 md:px-0 md:pr-10 md:pt-3 align-middle nav z-10 relative">
      {/* LOGO */}
      <div className="relative w-28 md:w-28 h-10 md:h-12">
        <Image priority className="object-contain" src={logo} layout="fill" alt=""/>
      </div>
      {/* Nav big screen*/}
      <div>
        <ul className="hidden md:flex flex-row justify-evenly space-x-6">
          <li className=" p-2 hover:bg-red-400">
            <Link href="/">Home</Link>
          </li>
          <li className=" p-2 hover:bg-red-400">
            <Link href="/dev">Developers</Link>
          </li>
          <li className=" p-2 hover:bg-red-400">
            <Link href="/blockchain">Blockchain</Link>
          </li>
          <li className=" p-2 hover:bg-red-400">
            <Link href="/tech">Tech</Link>
          </li>
          <li className=" p-2 hover:bg-red-400">
            <Link href="/finance">Finance</Link>
          </li>

          <li className=" p-2 hover:bg-red-400">
            <Link href="/about">About</Link>
          </li>

          <li className=" p-2 hover:bg-red-400">
            <Link href="/noma">Privacy Policy</Link>
          </li>
         
        </ul>
      </div>
      {/* nav small screen */}
      {menu && (
        <ul className="blue-glassmorphism p-5 pt-10 font-bold w-full absolute  flex flex-col md:hidden justify-evenly space-y-5">
          <li className="p-2 hover:bg-red-400">
            <Link href="/">Home</Link>
          </li>
          <li className=" p-2 hover:bg-red-400">
            <Link href="/dev">Developers</Link>
          </li>
          <li className=" p-2 hover:bg-red-400">
            <Link href="/blockchain">Blockchain</Link>
          </li>
          <li className=" p-2 hover:bg-red-400">
            <Link href="/tech">Tech</Link>
          </li>
          <li className=" p-2 hover:bg-red-400">
            <Link href="/finance">Finance</Link>
          </li>

          <li className=" p-2 hover:bg-red-400">
            <Link href="/about">About</Link>
          </li>

          <li className=" p-2 hover:bg-red-400">
            <Link href="/noma">Privacy Policy</Link>
          </li>
        </ul>
      )}
      {/* Menu */}
      <div className="block md:hidden absolute right-6">
        <h1 className="text-1xl  z-100 text-white " onClick={toggleMenu}>
          {menu ? <CloseIcon/> :<MenuIcon /> }
        </h1>
      </div>
    </div>
  );
};

export default Nav;
