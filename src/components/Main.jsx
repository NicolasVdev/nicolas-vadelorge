import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import logo from "../assets/img/keyboard-img.webp";
import selfie from "../assets/img/nyko.jpg";

export const Main = () => {
  return (
    <div id="home">
      <img className="w-full h-screen" src={logo} alt="/" />
      <div className="w-full h-screen absolute top-0 left-0">
        <div className="max-w-[800px] xl:max-w-[1300px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <div className="mt-[10px] sm:mt-0 flex justify-between w-full">
            <div className="h-[200px] grid grid-cols-1 ml-4 md:ml-0">
              <p className="sm:text-2xl text-xl font-bold text-[#C2E6FF] noto-sans-jp">
                Hey there! I'm
              </p>
              <h1 className="sm:text-8xl text-4xl font-bold bg-color-main-title noto-sans-jp place-self-center">
                Nicolas Vadelorge
              </h1>
              <h2 className="flex sm:text-4xl text-2xl pt-4 font-semibold noto-sans-jp w-max">
                <TypeAnimation
                  sequence={[
                    "Junior Web Developer.",
                    500,
                    "Coder.",
                    500,
                    "Tech' Addict.",
                    500,
                  ]}
                  wrapper="div"
                  cursor={true}
                  repeat={Infinity}
                  style={{
                    fontSize: "1em",
                    paddingLeft: "5px",
                    color: "#C2E6FF",
                  }}
                />
              </h2>
            </div>
            <div className="w-[150px] mr-4 lg:mr-0 sm:w-[220px] flex items-center h-fit">
              <img src={selfie} alt="selfie" className="rounded-full-pic"></img>
            </div>
          </div>
          <div className="mt-24 xl:mt-0 flex justify-between gap-10 md:pt-[50px] max-w-[300px] w-full text-[#C2E6FF] mx-auto">
            <a href="mailto:nicolasvadelorge.dev@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0992FF]">
              <FaEnvelope size={30} />
            </a>
            <a href="https://twitter.com/Nykodevv" target="_blank" rel="noopener noreferrer"className="hover:text-[#0992FF]">
              <FaTwitter size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/nicolas-vadelorge"
              target="_blank" rel="noopener noreferrer"
              className="hover:text-[#0992FF]"
            >
              <FaLinkedinIn size={30} />
            </a>
            <a href="https://github.com/NicolasVdev" target="_blank" rel="noopener noreferrer"className="hover:text-[#0992FF]">
              <FaGithub size={30} />
            </a>
          </div>
          <p className="text-xl text-center sm:text-3xl font-bold bg-color-main-title noto-sans-jp pt-20 xl:pt-32">
            Passionné de technologie et en constante évolution, j'ai réussi ma reconversion professionnelle avec plus d'un an d'expérience en développement web. 
          </p>
          <p className="text-xl text-center sm:text-3xl font-bold bg-color-main-title noto-sans-jp">Actuellement en recherche active pour une nouvelle mission, je suis motivé par l'apprentissage continu et le perfectionnement de mes compétences.</p>
        </div>
      </div>
    </div>
  );
};
