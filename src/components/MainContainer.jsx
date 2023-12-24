import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((state) => state?.movies?.getNowPlayingMovies);
  if (!movies) return;
  const mainMovies = movies[1];
  const { original_title, overview, id } = mainMovies;

  return (
    <div className="">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground moviesId={id} />
    </div>
  );
};

export default MainContainer;
