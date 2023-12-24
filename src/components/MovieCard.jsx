import { IMG_CDN_LINK } from "../utlis/Constant";

const MovieCard = ({ src }) => {
  return <img src={IMG_CDN_LINK + src} alt="movieImage" className="w-52" />;
};

export default MovieCard;
