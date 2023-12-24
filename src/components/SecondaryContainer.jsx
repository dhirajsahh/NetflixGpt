import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const {
    getNowPlayingMovies,
    getPopularMovies,
    getTopRatedMovies,
    getUpcommingMovies,
    getTrendingMovies,
  } = useSelector((state) => state?.movies);
  if (!getNowPlayingMovies) return null;
  return (
    <div className="-mt-20 sm:-mt-52 z-30">
      <MovieList title="Now Playing" movies={getNowPlayingMovies} />
      <MovieList title="TopRated" movies={getTopRatedMovies} />
      <MovieList title="Upcoming" movies={getUpcommingMovies} />
      <MovieList title="Popular" movies={getPopularMovies} />
      <MovieList title="Trending" movies={getTrendingMovies} />
    </div>
  );
};

export default SecondaryContainer;
