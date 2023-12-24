import { useEffect } from "react";
import { IMG_CDN_LINK, options } from "../utlis/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addSearchMovies } from "../Redux/moviesSlice";
import NotFound from "./NotFound";

const SearchResult = ({ query }) => {
  const dispatch = useDispatch();
  const searchedMovies = useSelector(
    (state) => state?.movies?.getSearchedMovies
  );
  console.log(searchedMovies);
  const getSearchedMovie = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}%20&include_adult=false&language=en-US&page=1`,
      options
    );
    const json = await data.json();
    dispatch(addSearchMovies(json.results));
  };
  useEffect(() => {
    getSearchedMovie();
  }, [query]);

  return !searchedMovies?.length > 0 ? (
    <NotFound />
  ) : (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 mt-2 bg-gray-500 overflow-x-auto text-white gap-5">
      {searchedMovies &&
        searchedMovies.map((item) => (
          <img
            className="w-52 rounded-md"
            key={item.id}
            src={IMG_CDN_LINK + item.poster_path}
            alt={item.title}
          />
        ))}
    </div>
  );
};

export default SearchResult;
