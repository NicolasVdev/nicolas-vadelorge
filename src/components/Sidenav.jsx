import React, { useState, useEffect } from 'react';
import { AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { GrProjects } from 'react-icons/gr';

export const Sidenav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const handleClickOutside = (e) => {
    if (nav && !e.target.closest('.nav-menu') && !e.target.closest('.menu-icon')) {
      closeNav();
    }
  };

  useEffect(() => {
    if (nav) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [nav]);

  return (
    <>
      <AiOutlineMenu
        onClick={handleNav}
        className='menu-icon fixed text-white top-4 right-4 z-[99] lg:hidden'
        size={20}
      />
      {nav && (
        <div className='fixed w-full h-screen flex flex-col justify-center items-center z-20 bg-black/70 nav-menu' onClick={closeNav}>
          <a
            href="#home"
            onClick={closeNav}
            className='w-[75%] flex justify-center items-center rounded-full shadow-md bg-gray-100 shadow-gray-400 m-3 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <AiOutlineHome size={20} />
            <span className='pl-4 text-lg'>Accueil</span>
          </a>
          <a
            href="#experience"
            onClick={closeNav}
            className='w-[75%] flex justify-center items-center rounded-full shadow-md bg-gray-100 shadow-gray-400 m-3 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <GrProjects size={20} />
            <span className='pl-4 text-lg'>Expérience</span>
          </a>
          <a
            href="#projects"
            onClick={closeNav}
            className='w-[75%] flex justify-center items-center rounded-full shadow-md bg-gray-100 shadow-gray-400 m-3 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <AiOutlineProject size={20} />
            <span className='pl-4 text-lg'>Projets</span>
          </a>
          {/* <a
            href="#contact"
            onClick={closeNav}
            className='w-[75%] flex justify-center items-center rounded-full shadow-md bg-gray-100 shadow-gray-400 m-3 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <AiOutlineMail size={20} />
            <span className='pl-4 text-lg'>Contact</span>
          </a> */}
        </div>
      )}
      <div className='lg:block hidden fixed top-[25%] z-10'>
        <div className='flex flex-col'>
          <a
            href="#home"
            className='flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-3 p-4 cursor-pointer hover:scale-110 ease-in duration-200 w-12 h-12'
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#experience"
            className='flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-3 p-4 cursor-pointer hover:scale-110 ease-in duration-200 w-12 h-12'
          >
            <GrProjects size={20} />
          </a>
          <a
            href="#projects"
            className='flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-3 p-4 cursor-pointer hover:scale-110 ease-in duration-200 w-12 h-12'
          >
            <AiOutlineProject size={30} />
          </a>
          {/* <a
            href="#contact"
            className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-3 p-4 cursor-pointer hover:scale-110 ease-in duration-200 w-12 h-12'
          >
            <AiOutlineMail size={20} />
          </a> */}
        </div>
      </div>
    </>
  );
};
