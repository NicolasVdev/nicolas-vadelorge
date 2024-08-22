import React from 'react'
import { WorkItem } from './WorkItem'
import twcss from '../assets/logos/Tailwind-CSS-Icon.png'
import docker from '../assets/logos/Docker.png'
import axios from '../assets/logos/Axios.png'
import js from '../assets/logos/JS.png'
import laravel from '../assets/logos/Laravel.svg'
import php from '../assets/logos/Php.png'
import vuejs from '../assets/logos/VueJS.png'
import sql from '../assets/logos/Sql.png'
import thunder from '../assets/logos/Thunder.png'
import ruby from '../assets/logos/Ruby_logo.svg'
import rails from '../assets/logos/Rails.png'
import react from '../assets/logos/React.png'
import postgresql from '../assets/logos/Postgresql.png'
import cv from '../assets/files/CV.pdf'

const data = [
  {
    year : '03/2024',
    title : 'Développeur web',
    company : 'Flippad',
    duration : 'Mission de 6 mois',
    details : 'Refonte du site web de la bijouterie Louis Julian.',
    technologies : 'Technologies :',
    logos : [
      {src: php, alt:'PHP'},
      {src: laravel, alt:'Laravel'},
      {src: js, alt:'JavaScript'},
      {src: vuejs, alt:'VueJS'},
      {src: twcss, alt: 'Tailwind CSS'},
      {src: thunder, alt: 'Thunder'},
      {src: docker, alt: 'Docker'},
      {src: sql, alt: 'MySQL'}
    ]
  },
  {
    year : '09/2023',
    title : 'Développeur web',
    company : 'THP',
    duration : 'Sprint de 2 semaines',
    details : "Création et développement d'une application web consistant en la refonte du site de la maison de quartier La Croix Berthaud.",
    technologies : 'Technologies :',
    logos : [
      {src: js, alt:'JavaScript'},
      {src: react, alt:'React'},
      {src: twcss, alt: 'Tailwind CSS'},
      {src: rails, alt: 'Ruby On Rails'},
      {src: axios, alt:'Axios'},
      {src: thunder, alt: 'Thunder'},
      {src: postgresql, alt: 'PostgreSQL'}
    ]
  },
  {
    year : '06/2023',
    title : 'Développeur web',
    company : 'THP',
    duration : 'Sprint de 2 semaines',
    details : "Création et développement d'une application web 'Ma Voirie' permettant de signaler rapidement les problèmes de voirie et de mettre en relation facilement les utilisateurs avec les décisionnaires de leur commune.",
    technologies : 'Technologies :',
    logos : [
      {src: ruby, alt:'Ruby'},
      {src: rails, alt:'Ruby On Rails'},
      {src: js, alt:'JavaScript'},
      {src: twcss, alt: 'Tailwind CSS'},
      {src: postgresql, alt: 'PostgreSQL'}
    ]
  },
];
export const Work = () => {
  return (
    <div id='work' className='w-full m-auto md:pl-20 p-4 py-16 bg-color'>
      <h1 className='pb-10 text-4xl font-bold text-center text-white'>
        Expérience
      </h1>
      <div className='flex items-center justify-center'>
        <div className='grid grid-cols-1 max-w-[1040px]'>
          {data.map((item, idx) => (
            <WorkItem 
            key={idx} 
            year={item.year} 
            title={item.title}
            company={item.company} 
            duration={item.duration} 
            details={item.details}
            technologies={item.technologies}
            logos={item.logos}
            />
          ))}
        </div>
      </div>
      <p className='pt-14 text-xl font-bold text-center text-white'>Pour voir l'ensemble de mon parcours et de mes expériences mon CV est disponible en cliquant<a href={cv} className='hover:underline ml-1 hover:text-[#0992FF]' target="_blank" rel="noopener noreferrer">ici</a></p>
    </div>
  )
}
