import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-screen aspect-video  sm:px-8 text-white  pt-[28%] sm:pt-[18%]">
      <h1 className="sm:text-4xl font-semibold">{title}</h1>
      <p className="sm:text-2xl hidden sm:inline-block sm:w-1/2">{overview}</p>
      <div className="flex gap-2 mt-3">
        <button className="bg-white text-black px-6 py-2 rounded-lg hover:opacity-80">
          PlayNow
        </button>
        <button className="bg-slate-500 text-white px-6 py-1 rounded-lg">
          MoreInfo
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
