import useTrailer from "../Hooks/useTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ moviesId }) => {
  const tralierInfo = useSelector((state) => state?.movies?.getTrailerInfo);
  useTrailer(moviesId);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${tralierInfo?.key}?si=3lEcBWA_XsGYrKej`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
