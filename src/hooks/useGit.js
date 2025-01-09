import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGit = (tag) => {
  const [gif, setGif] = useState("");

  const [loading, setLoading] = useState("false");

  //   const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  //   const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  async function fetchData(tag) {
    setLoading(true);

    const { data } = await axios.get(tag ? `${Url}&tag=${tag}` : Url);
    const imageSource = data.data.images.downsized_large.url;
    console.log(imageSource);
    setGif(imageSource);
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return [gif, loading, fetchData];
};

export default useGit;
