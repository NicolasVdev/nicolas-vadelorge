import React from "react";
import react from "../assets/logos/React.png";
import rails from "../assets/logos/Rails.png";
import js from '../assets/logos/JS.png'

export const LcbProjectItem = ({ img, title }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-lg shadow-[#1395FF] rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
  <img
    className="rounded-xl group-hover:opacity-10"
    style={{ height: "-webkit-fill-available" }}
    src={img}
    alt="/"
  />
  <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-4 md:p-8 w-full md:w-auto">
    <h3 className="text-lg md:text-xl font-bold text-white tracking-wider text-center sm:w-[300px] lg:w-max">
      {title}
    </h3>
    <div className="flex justify-center mx-4 xl:mx-8 my-4 xl:my-8 gap-2 xl:gap-4">
      <img className='h-8 w-8 md:h-12 md:w-12 xl:h-16 xl:w-16' src={js} alt='JavaScript'/>
      <img className="h-8 w-8 md:h-12 md:w-12 xl:h-16 xl:w-16" src={react} alt="React" />
      <img className="h-8 w-12 md:h-12 md:w-12 xl:h-16 xl:w-22 pb-1 xl:pb-2 ml-1" src={rails} alt="Rails" />
    </div>
    <a
      href="https://maison-quartier-croix-berthaud.vercel.app/"
      target="blank"
      className="flex justify-center items-center"
    >
      <p className="text-center p-2 md:p-3 rounded-lg bg-white text-gray-700 font-bold text-sm md:text-lg cursor-pointer">
        Détails
      </p>
    </a>
  </div>
</div>
  );
};
