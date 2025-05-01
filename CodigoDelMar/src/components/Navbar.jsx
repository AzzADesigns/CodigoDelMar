import React from 'react'
import { ContactButton } from './shared/ContactButton'
import { motion } from "motion/react"

export const Navbar = () => {

    const menu = [
        { texto: "Inicio", target: "top" },
        { texto: "Servicios", target: "servicios" },
        { texto: "Nosotros", target: "nosotros" },
        { texto: "Proyectos", target: "proyectos" },
    ];

    const scrollToSection = (id) => {
        if (id === "top") {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            
            }
        }
    }


    return (
        <motion.div
            className='w-[80%] 2xl:w-[70.5%] text-gray-950  bg-indigo-50/25 h-14 shadow-2xl xl:h-24 backdrop-blur-lg mt-5 p-5 flex justify-between items-center rounded-full fixed top-5 z-50'
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.img
                src="logo.png"
                alt=""
                className='w-20 xl:w-32'
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            />

            <div className='flex items-center'>
                <div className='mr-5 flex gap-10'>
                {menu.map((boton, index) => (
                    <motion.button
                        key={index}
                        onClick={() => scrollToSection(boton.target)}
                        className="mx-2 font-semibold xl:text-2xl cursor-pointer w-28  hover:scale-105 transition-all hover:font-bold"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                    >
                        {boton.texto}
                    </motion.button>
                ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <ContactButton />
                </motion.div>
            </div>
        </motion.div>
    )
}
