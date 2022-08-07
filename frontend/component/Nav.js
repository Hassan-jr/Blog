import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-evenly align-middle">
      <div>
        <p className="text-white text-4xl font-bold">NOMAVERSE</p>
      </div>

      <div>
        <button className="btn text-white ">Toggle</button>
      </div>

      <div className="text-white">
        <ul className="hidden md:flex flex-row space-x-6">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/dev">
              <a>Dev</a>
            </Link>
          </li>
          <li>
            <Link href="/finance">
              <a>Finance</a>
            </Link>
          </li>
          <li>
            <Link href="/tech">
              <a>Tech</a>
            </Link>
          </li>
          <li>
            <Link href="/health">
              <a>Health</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
