import React from 'react'
import { ContactButton } from './shared/ContactButton'

export const Header = () => {
  return (
    <header
        className='max-w-full h-screen bg-cover bg-center flex flex-col justify-center  pb-52 xl:pb-0 items-center'
        style={{backgroundImage:"url(/banner.png)"}}
    >   
        <div className='w-[80%] flex justify-center text-indigo-50 font-bold ml-8 2xl:ml-0 mt-24 xl:mt-20'>
            <h1 className='text-7xl xl:text-8xl flex flex-col items-center'>
                <span>La solucion digital</span>
                <span>que necesitas</span>
            </h1>
        </div>

        <div className='flex flex-col justify-center  xl:items-center ml-5 backdrop-blur-xs 2xl:ml-0 mt-14 p-2 xl:p-5 text-md xl:text-2xl text-indigo-50 rounded-xl'>
            <p>Damos vida a lo nuevo y convertimos sueños</p>
            <p>en proyectos exitosos.</p>
        </div>

        <div className='mt-14'>
            <ContactButton/>
        </div>

        
    </header>
  )
}
