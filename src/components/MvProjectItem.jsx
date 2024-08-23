import React from "react";
import ruby from "../assets/logos/Ruby_logo.svg";
import rails from "../assets/logos/Rails.png";
import js from "../assets/logos/JS.png";

export const MvProjectItem = ({ img, title }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-lg shadow-[#1395FF] rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
      <img
        className="rounded-xl group-hover:opacity-10"
        style={{ height: "-webkit-fill-available" }}
        src={img}
        alt="Screenshot site MaVoirie"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-4 md:p-8 w-full md:w-auto">
        <h3 className="text-lg lg:text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <div className="flex justify-center mx-4 md:mx-8 my-4 md:my-8 gap-2 md:gap-4">
          <img className="h-6 w-8 lg:h-12 lg:w-16 mt-1 md:mt-3 pr-1 md:pr-2" src={ruby} alt="Ruby" />
          <img className="h-8 w-11 lg:h-16 lg:w-22" src={rails} alt="Ruby On Rails" />
          <img className="h-8 w-8 lg:h-16 lg:w-16 mt-1 md:mt-2" src={js} alt="JavaScript" />
        </div>
        <a href="https://ma-voirie.fly.dev/" target="blank" className="flex justify-center items-center">
          <p className="text-center p-2 lg:p-3 rounded-lg bg-white text-gray-700 font-bold text-sm lg:text-lg cursor-pointer">
            Détails
          </p>
        </a>
      </div>
    </div>
  );
};
