import React from "react";
import Headers from "./Header";

const Login = () => {
  return (
    <div>
      <Headers />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/b549f4ab-8b40-404b-a45a-b8ed1990904d/NP-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="BackgroundImage"
        />
      </div>
      <form className=" text-white absolute w-3/12  bg-black my-36 mx-auto right-0 left-0 flex flex-col gap-7 px-8 py-16 rounded-lg bg-opacity-90">
        <h1 className="font-bold  text-3xl">Sign In</h1>
        <input
          type="text"
          placeholder="Email Adress"
          className="p-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 w-full bg-gray-700 rounded-lg"
        />
        <button className="p-4 bg-red-600 w-full rounded-lg">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
