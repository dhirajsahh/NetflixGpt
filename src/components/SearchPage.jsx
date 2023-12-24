import { backgroundImage } from "../utlis/Constant";
import SearchBar from "./SearchBar";

const SearchPage = () => {
  return (
    <>
      <div className="absolute -z-10">
        <img src={backgroundImage} alt="background-image" />
      </div>
      <SearchBar />
    </>
  );
};

export default SearchPage;
