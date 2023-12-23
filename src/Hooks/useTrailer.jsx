import { useEffect } from "react";
import { options } from "../utlis/Constant";
import { useDispatch } from "react-redux";
import { addTrailerInfo } from "../Redux/moviesSlice";

const useTrailer = (moviesId) => {
  const dispatch = useDispatch();
  const getmovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${moviesId}/videos?language=en-US`,
      options
    );
    const json = await data.json();
    const filterItem = filterData(json.results);
    const trailer = filterItem.length > 0 ? filterItem[0] : json?.results[0];
    dispatch(addTrailerInfo(trailer));
  };
  function filterData(data) {
    return data.filter((item) => item.type === "Trailer");
  }
  useEffect(() => {
    getmovieVideos();
  }, []);
};
export default useTrailer;
