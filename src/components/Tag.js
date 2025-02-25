import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGit from "../hooks/useGit";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
  const [tag, setTag] = useState("");
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState("false");

  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   console.log(imageSource);
  //   setGif(imageSource);
  //   setLoading(false);
  // }
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // // function changeHandler(event) {
  // //   setTag(event.target.value);
  // // }
  const [gif, loading, fetchData] = useGit(tag);
  // function clickHandler() {
  //   fetchData();
  // }
  return (
    <div className="w-1/2 rounded-lg border border-black  bg-blue-500 flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">
        Random {tag}Gif
      </h1>

      {loading ? <Spinner /> : <img src={gif} width="450" />}
      <input
        type="text"
        className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center "
        onChange={(event) => setTag(event.target.value)}
        value={tag}
      />
      <button
        // onClick={clickHandler}
        onClick={() => fetchData(tag)}
        className="w-10/12 rounded-lg bg-green-300 text-lg py-2 mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
