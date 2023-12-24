import React from "react";

const SearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="p-3 grid grid-cols-12 md:w-1/2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="What do you like to watch today"
          className="px-3 py-3 rounded-lg border col-span-9 bg-slate-50"
        />
        <button className="bg-red-700 text-white px-3 py-2 ml-3 rounded-lg col-span-3">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
