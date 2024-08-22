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
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <div className="flex justify-center mx-8 my-8 gap-4">
          <img className="h-16 w-16 mr-2" src={react} alt="React" />
          <img className="h-16 w-16" src={supabase} alt="Supabase" />
        </div>
        <a href="https://react-selfie-app.vercel.app/" target="blank">
          <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointor">
            Détails
          </p>
        </a>
      </div>
    </div>
  );
};
