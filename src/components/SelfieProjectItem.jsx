import React from "react";
import supabase from "../assets/logos/Supabase.png";
import react from "../assets/logos/React.png";

export const SelfieProjectItem = ({ img, title }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-lg shadow-[#1395FF] rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
      <img
        className="rounded-xl group-hover:opacity-10"
        style={{ height: "-webkit-fill-available" }}
        src={img}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-4 md:p-8 w-full md:w-auto">
        <h3 className="text-lg lg:text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <div className="flex justify-center mx-4 md:mx-8 my-4 md:my-8 gap-2 md:gap-4">
          <img className="h-8 w-8 lg:h-16 lg:w-16 mr-1 md:mr-2" src={react} alt="React" />
          <img className="h-8 w-8 lg:h-16 lg:w-16" src={supabase} alt="Supabase" />
        </div>
        <a href="https://react-selfie-app.vercel.app/" target="blank" className="flex justify-center items-center">
          <p className="text-center p-2 lg:p-3 rounded-lg bg-white text-gray-700 font-bold text-sm lg:text-lg cursor-pointer w-fit">
            Détails
          </p>
        </a>
      </div>
    </div>
  );
};
