import React from 'react'
import { ContactButton } from './shared/ContactButton'


export const Navbar = () => {

    const menu = ["Inicio", "Nosotros", "Servicios", "Proyectos"]

    return (
        <div className='w-[80%] h-14 xl:h-24 backdrop-blur-2xl mt-5 p-5 flex justify-between items-center rounded-full fixed top-5 '>
            <img src="logo.png" alt="" className='w-20 xl:w-32 '/>

            <div className='flex items-center'>
                <div className='mr-5'>
                    {menu.map((boton, index) => (
                        <button key={index} className="mx-2 text-white xl:text-2xl">
                            {boton}
                        </button>
                    ))}
                </div>

                <ContactButton/>
            </div>
        </div>
    )
}
