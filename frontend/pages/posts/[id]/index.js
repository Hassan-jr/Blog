import React from "react";
import { useRouter } from "next/router";

const posts = () => {
  const router = useRouter();
  const { id,content } = router.query;

  return (
    <div>
      <h2 className="text-8xl">THE ID IS {id}</h2>
      
    </div>
  );
};

export default posts;
