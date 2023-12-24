import { useEffect } from "react";
import { options } from "../utlis/Constant";
import { addPopularMovies } from "../Redux/moviesSlice";
import { useDispatch } from "react-redux";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?&page=1",

      options
    );
    const json = await data.json();
    dispatch(addPopularMovies(json?.results));
  };
  useEffect(() => {
    getPopularMovie();
  }, []);
};
export default usePopularMovies;
