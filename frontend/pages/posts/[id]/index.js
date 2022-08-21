import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import Spiner from "../../../components/Spiner";

const Posts = () => {
  const router = useRouter();
  const [data, setData] = useState({});
  const [id, setId] = useState();
  useEffect(() => {
    const getData = async () => {
      const { id } = await router.query;
      setId(id);
      console.log("The id is ", id);
      const url = "/post/";
      if (id) {
        const res = await axios.get(`${url}article/${id}`);
        const data = res.data;
        setData(data);
      }
    };
    getData();
  }, [router.query.id]);

  const Allpost = data.posts;

  console.log("data is ", data);

  return (
    <div>
      <Head>
        <title>{data.mainTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={data.metaData} />
      </Head>
      {!id && <Spiner />}
      {id && (
        <div className="w-full md:w-3/4  h-full mx-auto  flex flex-col justify-center align-middle items-center p-1 md:border-x md:border-black space-y-5 md:p-5">
          {/* title */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">{data.mainTitle}</h1>
          </div>
          {/* main image */}
          <div className="relative h-96 w-full">
            <Image
              src={data.mainUrl}
              className=""
              layout="fill"
              alt={data.mainTitle}
            />
          </div>

          {/* posts */}
          <div>
            {Allpost?.length > 0 &&
              Allpost.map((post, index) => (
                <div
                  className="space-y-5 md:space-y-5 px-2 py-5 md:p-10"
                  key={index}
                >
                  {post.title && (
                    <p className="text-3xl font-bold">{post.title}</p>
                  )}
                  {post.content && (
                    <p className="text-xl md:text-2xl py-5">{post.content}</p>
                  )}
                  {post.url && (
                    <div className="relative h-80 w-full">
                      <Image
                        src={post.url}
                        className=""
                        layout="fill"
                        alt={post.title || ""}
                      />
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Posts;
