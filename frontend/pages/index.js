import React from "react";
import { useTheme } from "next-themes";
import  ThemeSwitch from "../components/ThemeSwitcher"

const Home = () => {
  const { theme, setTheme } = useTheme();
  return;
  <div>
   { ThemeSwitch()}
    <h1 className="text-4xl  text-black"> DARK MODE AND LIGHT MODE WORKING</h1>
   
  </div>;
};

export default Home;
