import React from "react";
import Header from "./Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="relative sm:flex items-center justify-center bg-gradient-to-t from-black">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/b549f4ab-8b40-404b-a45a-b8ed1990904d/NP-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="BackgroundImage"
        />

        <div className="sm:absolute text-white flex flex-col items-center justify-center gap-4">
          <h1 className="sm:text-5xl  sm:font-bold mx-auto">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="sm:text-3xl">Watch anywhere. Cancel anytime</p>
          <p className="sm:text-2xl text-center">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex gap-4 flex-col sm:flex-row ">
            <input
              type="text"
              placeholder="Email Adress"
              className="p-4 bg-slate-700 rounded-lg focus:outline-none"
            />
            <button className="p-4 bg-red-600  rounded-lg hover:opacity-90">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
