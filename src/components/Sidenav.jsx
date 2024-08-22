import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs'
import { GrProjects } from 'react-icons/gr';

export const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <AiOutlineMenu onClick={handleNav} className='absolute text-white top-4 right-4 z-[99] md:hidden'/>
      {
        nav ? (
          <div className='fixed w-full h-screen flex flex-col justify-center items-center z-20'>
            <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-md bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineHome size={20} />
              <span className='pl-4'>Home</span>
            </a>
            <a href="#work" className='w-[75%] flex justify-center items-center rounded-full shadow-md bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <GrProjects size={20} />
              <span className='pl-4'>Expérience</span>
            </a>
            <a href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-md bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineProject size={20} />
              <span className='pl-4'>Projects</span>
            </a>
            {/* <a href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-md bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineMail size={20} />
              <span className='pl-4'>Contact</span>
            </a> */}
          </div>
        ) : (
          ''
        )
      }
      <div className='md:block hidden fixed top-[25%] z-10'>
        <div className='flex flex-col'>
          <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-300 w-10 h-10'>
            <div className='w-full h-full flex flex-col justify-center items-center'>
              <div className='flex justify-center items-center'>
                <AiOutlineHome size={20} />
              </div>
            </div>
          </a>
          <a href="#work" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-300 w-10 h-10'>
            <div className='w-full h-full flex flex-col justify-center items-center'>
                <div className='flex justify-center items-center'>
                  <GrProjects size={20} />
                </div>
            </div>
          </a>
          <a href="#projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-300 w-10 h-10'>
            <div className='w-full h-full flex flex-col justify-center items-center'>
                <div className='flex justify-center items-center'>
                  <AiOutlineProject size={20} />
                </div>
            </div>
          </a>
          {/* <a href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-300 h-10 w-10'>
            <div className='w-full h-full flex flex-col justify-center items-center'>
                <div className='flex justify-center items-center'>
                  <AiOutlineMail size={20} />
                </div>
            </div>
          </a> */}
        </div>
      </div>
    </>
  );
};
