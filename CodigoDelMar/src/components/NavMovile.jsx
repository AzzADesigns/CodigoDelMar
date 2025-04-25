import React, { useState } from 'react'
import { motion, AnimatePresence } from "motion/react"
import { IoHome } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";

export const NavMovile = () => {
    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive(prev => !prev);
    }

    const navItems = [
        { id: 1, icon: <IoHome className="text-2xl" />, label: "Inicio" },
        { id: 2, icon: <FaUsers className="text-2xl" />, label: "Sobre Nosotros" },
        { id: 3, icon: <FaBriefcase className="text-2xl" />, label: "Servicios" },
        { id: 4, icon: <FaCode className="text-2xl" />, label: "Proyectos" }
    ];

    return (
        <motion.div
            className=" w-20 fixed flex flex-col justify-end shadow-2xl shadow-gray-950 items-center backdrop-blur-md rounded-full right-2.5 top-5 overflow-hidden z-50"
            animate={{
                height: isActive ? 380 : 80
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <ul className="flex flex-col h-full justify-between items-center py-2">
                <AnimatePresence>
                    {isActive && navItems.map(item => (
                        <motion.li
                            key={item.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.3 }}
                            className="text-gray-950 cursor-pointer pt-5 hover:scale-110 transition-transform"
                        >
                            {item.icon}
                        </motion.li>
                    ))}
                </AnimatePresence>
            </ul>

            <button onClick={handleClick}>
                <img src="/logo.png" className='w-32 cursor-pointer hover:scale-150 transition-all ml-[2px]' alt="logo" />
            </button>
        </motion.div>
    )
}
