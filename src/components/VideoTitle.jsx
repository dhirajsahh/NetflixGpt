import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-full sm:w-3/4 flex justify-center items-center px-4 pt-52">
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl font-semibold">{title}</h1>
        <p className="text-2xl">{overview}</p>
        <div className="flex gap-2">
          <button className="bg-slate-500 text-white px-6 py-2 rounded-lg">
            PlayNow
          </button>
          <button className="bg-slate-500 text-white px-6 py-1 rounded-lg">
            MoreInfo
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
