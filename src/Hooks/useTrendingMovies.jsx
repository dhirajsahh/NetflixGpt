import { useEffect } from "react";
import { options } from "../utlis/Constant";
import { addTrendingMovies } from "../Redux/moviesSlice";
import { useDispatch } from "react-redux";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const getTrendingdMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",

      options
    );
    const json = await data.json();
    dispatch(addTrendingMovies(json?.results));
  };
  useEffect(() => {
    getTrendingdMovie();
  }, []);
};
export default useTrendingMovies;
