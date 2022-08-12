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

  // number of paragraphs
  const [num, setNum] = useState([1]);
  const handleClick = () => {
    setNum((prev) => [...prev, 2]);
  };

  //  onChangehandler
  const onChangehandler = (e) => {
    const name = e.target.name;
    setPost((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  };
  console.log("hello world!");
  const hanldeClick2 = () => {
    const  post2 = post
    console.log(post2);
  };

  // submitHandler
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className=" flex flex-col items-center justify-center">
      <h1 className="text-5xl m-10">MAKE A POST</h1>

      {/* form starts here */}
      <form onSubmit={submitHandler} className="mt-10">
        <h1 className="text-4xl text-white">Header</h1>
        <div className="flex flex-col space-y-3 w-80 ">
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
          <div className="flex flex-row space-x-8">
            <h1 className="text-4xl text-white">BODY</h1>

            <button
              className="bg-slate-500 text-white rounded p-3"
              onClick={handleClick}
            >
              ADD PARAGRAPH
            </button>
          </div>

          {/* BODY */}
          {num.map((item, index) => (
            <div className="flex flex-col space-y-3 w-80 mb-20" key={index}>
              <input
                type="text"
                name={`body${index + 1}title`}
                placeholder={`Enter  The title ${index + 1}`}
                onChange={onChangehandler}
              />
              <textarea
                className="h-40"
                type="text"
                name={`body${index + 1}content`}
                placeholder={`Enter  The content ${index + 1}`}
                onChange={onChangehandler}
              />
              <input
                className="mb-10"
                type="text"
                name={`body${index + 1}url`}
                placeholder={`Enter  The Imge URL ${index + 1}`}
                onChange={onChangehandler}
              />
            </div>
          ))}
        </div>
        {/* <button
          className="bg-slate-500 text-white rounded p-3 mt-20 mb-20"
          onClick={submitHandler}
        >
          SUBMIT
        </button> */}
        <button
          type="submit"
          className="bg-slate-500 text-white rounded p-3 mt-20 mb-20"
          onClick={hanldeClick2}
        >
          SUBMIT
        </button>
      </form>

      {/* TEST */}
      <div>
        <h1>{post.mainTitle}</h1>
        <h1>{post.category}</h1>
        <h1>{post.body}</h1>
      </div>
    </div>
  );
};

export default post;
