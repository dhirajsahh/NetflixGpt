import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useUpcommingMovies from "../Hooks/useUpcommingMovies";
import useTrendingMovies from "../Hooks/useTrendingMovies";
import SearchPage from "./SearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
  const searchGptValue = useSelector((state) => state.searchGpt.searchGptValue);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcommingMovies();
  useTrendingMovies();
  return (
    <div>
      <Header />
      {searchGptValue ? (
        <SearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
