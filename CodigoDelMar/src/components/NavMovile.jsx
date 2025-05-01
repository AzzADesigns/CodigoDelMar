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

    const scrollToSection = (id) => {
        if (id === "top") {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    const navItems = [
        { id: 1, icon: <IoHome className="text-2xl" />, target: "top" },
        { id: 2, icon: <FaUsers className="text-2xl" />, target: "nosotros" },
        { id: 3, icon: <FaBriefcase className="text-2xl" />, target: "servicios" },
        { id: 4, icon: <FaCode className="text-2xl" />, target: "proyectos" }
    ];

    return (
        <motion.div
            className="w-16 fixed flex flex-col justify-end bg-indigo-50/25 h-14 shadow-2xl shadow-gray-950 items-center backdrop-blur-md rounded-full right-2.5 top-5 overflow-hidden z-50"
            animate={{
                height: isActive ? 380 : 90
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <ul className="flex flex-col h-full justify-between items-center py-2">
                <AnimatePresence>
                    {isActive && navItems.map(item => (
                        <motion.li
                            key={item.id}
                            onClick={() => {
                                scrollToSection(item.target);
                                setIsActive(false); // cerrar menú
                            }}
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
                <img src="/logo.png" className='w-32 h-24 object-cover cursor-pointer hover:scale-150 transition-all ml-[2px] mb-2' alt="logo" />
            </button>
            <p className='absolute text-sm font-bold bottom-2 text-gray-900 transition-all'>
                {isActive ? "Cerrar" : "Abrir"}
            </p>
        </motion.div>
    )
}
