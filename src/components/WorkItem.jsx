import React from "react";

export const WorkItem = ({
  year,
  title,
  duration,
  company,
  details,
  technologies,
  logos,
}) => {
  return (
    <ol className="flex flex-col md:flew-row relative border-l border-white">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border-white" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md">
            {year}
          </span>
          <span className="text-lg font-semibold text-white">{title}</span>
          <span className="text-lg font-medium text-white">- {company} -</span>
          <span className="text-sm font-normal leading-none text-white italic mt-0.5">
            {duration}
          </span>
        </p>
        <p className="my-2 py-2 text-base font-normal text-white/80">{details}</p>
        <div className="flex items-center">
          <p className="my-2 text-base font-normal text-white/80">
            {technologies}
          </p>
          {logos && (
            <div className="flex w-fit h-10 ml-2">
              {logos.map((logo, index) => (
                <img
                  key={index}
                  className="mr-2"
                  src={logo.src}
                  alt={logo.alt}
                />
              ))}
            </div>
          )}
        </div>
      </li>
    </ol>
  );
};
