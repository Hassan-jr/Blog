import React, { useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="flex flex-row justify-around px-3 pt-1 md:px-20 md:pt-3 align-middle nav">
      {/* LOGO */}
      <div className="flex-1 ">
        <h1 className="text-4xl  p-3 w-40 logo font-bold">Hassanjr</h1>
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
        <h1 className="text-1xl mt-5 z-100 " onClick={toggleMenu}>
          <MenuIcon />
        </h1>
      </div>
    </div>
  );
};

export default Nav;
