import React, { useState } from "react";

const post = () => {
  const [post, setPost] = useState({
    mainTitle: "",
    category: "",
    mainUrl: "",
    body: [
      {
        title: "",
        content: "",
        url: "",
      },
    ],
  });

  const [num, setNum] = useState(1);
  const updateNumOfParagraphs = (e) => {
    setNum(e.target.value);
  };
  //  onChangehandler
  const onChangehandler = (e) => {
    console.log(e.target);
    setPost((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  };

  // submitHandler
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className=" flex flex-col items-center justify-center">
      <h1 className="text-5xl m-10">MAKE A POST</h1>

       {/* number of paragraphs */}
       <input
            type="text"
            name="num"
            placeholder="Enter Number of paragraphs"
            onChange={updateNumOfParagraphs}
          />
          
          {/* form starts here */}
      <form onSubmit={submitHandler} className="mt-10">
        <div className="flex flex-col space-y-3 w-80">
          {/*  mainTitle*/}
          <input
            type="text"
            name="mainTitle"
            placeholder="Main Title"
            onChange={onChangehandler}
          />
          {/* category */}
          <input
            type="text"
            name="category"
            placeholder="category"
            onChange={onChangehandler}
          />

          {/* mainUrl */}
          <input
            type="text"
            name="mainUrl"
            placeholder="mainUrl"
            onChange={onChangehandler}
          />

          {/* BODY */}
          
         
        </div>
      </form>
    </div>
  );
};

export default post;
