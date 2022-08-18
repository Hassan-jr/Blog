import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { get_one } from "../../../components/Redux/Actions/Main";
import { useSelector, useDispatch } from "react-redux";
import Sideslider from "../../../components/Sideslider";
import Spiner from "../../../components/Spiner";
import axios from "axios";

const Posts = () => {
  
  const router = useRouter();
 
  
  

  const { id } = router.query;

  

 
 
 

  const data = useSelector((state) => state.Main.onePost);
  

  const isLoading = useSelector((state) => state.Main.loading);

  // if (isLoading) {
  //   return <Spiner />;
  // }

  return (
    <div className="px-1 md:px-20 text-white">
      <h2 className="text-8xl">{id}</h2>
    </div>
  );
};

export default Posts;
