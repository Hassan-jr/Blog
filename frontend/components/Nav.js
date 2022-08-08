import React,{useState} from "react";
import Link from "next/link";

const Nav = () => {
const [menu, setMenu] = useState(false)
const toggleMenu=()=>{
  setMenu(!menu)
}

  return (
    <div className="flex flex-row justify-around px-5 pt-1 md:px-20 md:pt-3 align-middle nav">
      {/* LOGO */}
      <div className='flex-1'>
        <h1 className="text-2xl">Hassanjr</h1>
      </div>
      {/* Nav big screen*/}
      <div>
        <ul className="hidden md:flex flex-row justify-evenly space-x-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/dev">Dev</Link>
          </li>
          <li>
            <Link href="/finance">Finance</Link>
          </li>
          <li>
            <Link href="/tech">Tech</Link>
          </li>
          <li>
            <Link href="/health">Health</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
      {/* nav small screen */}
     { menu && <div>
      <ul className="flex flex-col md:hidden justify-evenly space-y-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/dev">Dev</Link>
          </li>
          <li>
            <Link href="/finance">Finance</Link>
          </li>
          <li>
            <Link href="/tech">Tech</Link>
          </li>
          <li>
            <Link href="/health">Health</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>

      </div>}
{/* Menu */}
<div className="block md:hidden">
  <h1 className="text-1xl" onClick={toggleMenu}>MENU</h1>
</div>

    </div>
  );
};

export default Nav;
