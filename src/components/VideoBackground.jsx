import useTrailer from "../Hooks/useTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ moviesId }) => {
  const tralierInfo = useSelector((state) => state?.movies?.getTrailerInfo);
  useTrailer(moviesId);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${tralierInfo?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
