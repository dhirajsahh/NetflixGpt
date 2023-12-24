import { useEffect } from "react";
import { options } from "../utlis/Constant";
import { addUpcommingMovies } from "../Redux/moviesSlice";
import { useDispatch } from "react-redux";

const useUpcommingMovies = () => {
  const dispatch = useDispatch();
  const getUpcommingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?&page=1",
      options
    );
    const json = await data.json();
    dispatch(addUpcommingMovies(json?.results));
  };
  useEffect(() => {
    getUpcommingMovies();
  }, []);
};
export default useUpcommingMovies;
