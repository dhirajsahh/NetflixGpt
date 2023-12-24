import { useEffect } from "react";
import { options } from "../utlis/Constant";
import { addTopRatedMovies } from "../Redux/moviesSlice";
import { useDispatch } from "react-redux";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?&page=1",

      options
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json?.results));
  };
  useEffect(() => {
    getTopRatedMovie();
  }, []);
};
export default useTopRatedMovies;
