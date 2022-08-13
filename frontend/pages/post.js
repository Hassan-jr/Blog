import React, { useState } from "react";

const post = () => {
  const [Post, setPost] = useState({
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
  // const [num, setNum] = useState([1]);
  const handleClick = (e) => {
    e.preventDefault();
    // setNum((prev) => [...prev, 2]);
    setPost({
      body: [...Post.body, { title: "", content: "", url: "" }],
    });
  };

  //  onChangehandler
  const onChangehandler = (e) => {
    if (["title", "content", "url"].includes(e.target.name)) {
      let body = Post.body && [...Post.body];
      body[e.target.id][e.target.name] = e.target.value;
      setPost({ body });
    } else {
      setPost({ [e.target.name]: e.target.value });
    }
  };

  // test

  const hanldeClick2 = () => {
    console.log(Post);
  };

  // submitHandler
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className=" flex flex-col items-center justify-center">
      <h1 className="text-5xl m-10">MAKE A POST</h1>

      {/* form starts here */}
      <form
        onSubmit={submitHandler}
        className="mt-10"
        onChange={onChangehandler}
      >
        <h1 className="text-4xl text-white">Header</h1>
        <div className="flex flex-col space-y-3 w-80 ">
          {/*  mainTitle*/}
          <input
            type="text"
            name="mainTitle"
            placeholder="Main Title"
            value={Post.mainTitle}
            // onChange={onChangehandler}
          />
          {/* category */}
          <input
            type="text"
            name="category"
            placeholder="category"
            value={Post.category}
            // onChange={onChangehandler}
          />

          {/* mainUrl */}
          <input
            type="text"
            name="mainUrl"
            placeholder="mainUrl"
            value={Post.mainUrl}
            // onChange={onChangehandler}
          />

          {/* BUTTO FOR ADDING THE PARAGRAPHS */}
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
          {Post.body?.map((item, index) => (
            <div className="flex flex-col space-y-3 w-80 mb-20" key={index}>
              <input
                type="text"
                id={index}
                name="title"
                placeholder={`Enter  The title ${index + 1}`}
                value={item.title}
                // onChange={onChangehandler}
              />
              <textarea
                className="h-40"
                type="text"
                id={index}
                name="content"
                placeholder={`Enter  The content ${index + 1}`}
                value={item.content}
                // onChange={onChangehandler}
              />
              <input
                className="mb-10"
                type="text"
                id={index}
                name="url"
                placeholder={`Enter  The Imge URL ${index + 1}`}
                value={item.url}
                // onChange={onChangehandler}
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
        <h1>{Post.mainTitle}</h1>
        <h1>{Post.category}</h1>
        <h1>{Post && Post.body && Post.body[0].title}</h1>
      </div>
    </div>
  );
};

export default post;
