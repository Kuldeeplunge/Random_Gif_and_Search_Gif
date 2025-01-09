
import Spinner from "./Spinner";
import useGit from "../hooks/useGit";

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   console.log(imageSource);
  //   setGif(imageSource);
  //   setLoading(false);
  // }
  // useEffect(() => {
  //   fetchData();
  // }, []);
  const [gif, loading, fetchData] = useGit();
  // function clickHandler() {
  //   fetchData();
  // }
  return (
    <div className="w-1/2 rounded-lg border border-black  bg-green-500 flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">
        A Random Gif
      </h1>

      {loading ? <Spinner /> : <img src={gif} width="450" />}

      <button
        // onClick={clickHandler}
        onClick={() => fetchData()}
        className="w-10/12 rounded-lg bg-green-300 text-lg py-2 mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
