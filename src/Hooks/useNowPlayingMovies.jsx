import { useEffect } from "react";
import { options } from "../utlis/FireBase";
import { addNowPlayingmovies } from "../Redux/moviesSlice";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      options
    );
    const json = await data.json();
    dispatch(addNowPlayingmovies(json?.results));
  };
  useEffect(() => {
    getNowPlayingMovie();
  }, []);
};
export default useNowPlayingMovies;
