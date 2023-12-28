import { useSelector } from "react-redux";
import { language } from "../utlis/LanguageConstant";
import { useRef, useState } from "react";

import SearchResult from "./SearchResult";

const SearchBar = () => {
  const lang = useSelector((state) => state?.config?.lang);
  const searchRef = useRef(null);
  const [query, setQuery] = useState(null);

  const handleGptSearchClick = async () => {
    setQuery(searchRef.current.value);
  };
  return (
    <>
      <div className="pt-44 flex justify-center">
        <form
          className="p-3 grid grid-cols-12 md:w-1/2"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder={language[lang]?.searchPlaceholder}
            className="px-3 py-3 rounded-lg border col-span-9 bg-slate-50"
            ref={searchRef}
          />
          <button
            className="bg-red-700 text-white px-3 py-2 ml-3 rounded-lg col-span-3"
            onClick={handleGptSearchClick}
          >
            {language[lang]?.btnSearchValue}
          </button>
        </form>
      </div>
      <div>{query && <SearchResult query={query} />}</div>
    </>
  );
};

export default SearchBar;
