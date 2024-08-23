import React from 'react'
import { SelfieProjectItem } from './SelfieProjectItem'
import { LcbProjectItem } from './LcbProjectItem'
import { MvProjectItem } from './MvProjectItem'
import fromage from '../assets/img/3F.jpg'
import mv from '../assets/img/MV.png'
import lcb from '../assets/img/LCB.png'

export const Projects = () => {
  return (
    <div className='w-full m-auto lg:pl-20 p-4 py-16 reversebg-color pt-[500px] sm:pt-20'>
      <h1 id='projects' className='text-4xl font-bold text-center text-white pb-14'>Projets</h1>
      <div className='flex justify-center items-center'>
        <div className='grid sm:grid-cols-2 gap-12 max-w-[1040px]'>
          <SelfieProjectItem img={fromage} title='Concours de selfie' />
          <LcbProjectItem img={lcb} title='Maison de quartier La Croix Berthaud' />
          <MvProjectItem img={mv} title='Ma Voirie' />
        </div>
      </div>
    </div>
  )
}
