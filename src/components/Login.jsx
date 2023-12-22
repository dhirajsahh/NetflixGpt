import React, { useState } from "react";
import Headers from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignForm(!isSignInForm);
  };
  return (
    <div>
      <Headers />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/b549f4ab-8b40-404b-a45a-b8ed1990904d/NP-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="BackgroundImage"
        />
      </div>
      <form className=" text-white absolute w-full h-full md:h-auto md:w-3/12 bg-black md:my-36 mx-auto right-0 left-0 flex flex-col gap-7 px-12 py-16 rounded-lg bg-opacity-90">
        <h1 className="font-semibold  text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Fulll Name"
            className="p-4 w-full bg-gray-700 rounded-lg focus:outline-none"
          />
        )}
        <input
          type="text"
          placeholder="Email Adress"
          className="p-4 w-full bg-gray-700 rounded-lg focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 w-full bg-gray-700 rounded-lg focus:outline-none"
        />
        <button className="p-4 bg-red-600 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm} className="cursor-pointer">
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already a User Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
