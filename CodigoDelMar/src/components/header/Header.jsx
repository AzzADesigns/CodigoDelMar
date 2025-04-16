import React from 'react'
import { motion } from 'motion/react'
import { ContactButton } from '../shared/ContactButton'

export const Header = () => {
    return (
        <header
            className='max-w-full h-screen bg-cover bg-center flex flex-col justify-center pb-52 xl:pb-0 items-center'
            style={{ backgroundImage: "url(/banner.png)" }}
        >
            <motion.div
                className='w-[80%] flex justify-center text-indigo-50 font-bold ml-8 2xl:ml-0 mt-24 xl:mt-20'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.h1
                    className='text-7xl xl:text-8xl flex flex-col items-center'
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span>La solución digital</span>
                    <span>que necesitas</span>
                </motion.h1>
            </motion.div>

            <motion.div
                className='flex flex-col justify-center xl:items-center ml-5 backdrop-blur-xs 2xl:ml-0 mt-14 p-2 xl:p-5 text-md xl:text-2xl text-indigo-50 rounded-xl'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <p>Damos vida a lo nuevo y convertimos sueños</p>
                <p>en proyectos exitosos.</p>
            </motion.div>

            <motion.div
                className='mt-14'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
            >
                <ContactButton />
            </motion.div>
        </header>
    )
}
