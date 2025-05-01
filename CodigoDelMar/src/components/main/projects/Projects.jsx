import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const Projects = () => {
    const [selectedIndex, setSelectedIndex] = useState(null)

    const handleClick = (index) => {
        setSelectedIndex(selectedIndex === index ? null : index);
    };

    const images = [
        '/proyecto1.png',
        '/proyecto2.png',
        '/proyecto3.png',
        '/proyecto4.png'
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-h-screen flex flex-col justify-center items-center mt-52 px-4"
        >
            <div className="w-[90%] lg:w-[90%] max-w-6xl relative overflow-hidden shadow-2xl rounded-3xl">
                <div className="w-full h-[800px] md:h-[600px] flex justify-center items-center sm:h-[70vh] relative">
                    <div className="flex flex-col justify-center items-center w-[70%] gap-6 text-gray-950 text-center">
                        <h3 className="text-2xl md:text-4xl xl:text-5xl font-extrabold">
                            MozoPlus
                        </h3>
                        <p className="text-base md:text-xl xl:text-3xl">
                            Sistema integral de gestión para restaurantes que optimiza el servicio y mejora la experiencia del cliente.
                        </p>
                    </div>

                    <AnimatePresence mode="wait">
                        {selectedIndex !== null && (
                            <motion.img
                                key={images[selectedIndex]}
                                src={images[selectedIndex]}
                                alt=""
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer"
                                onClick={() => setSelectedIndex(null)}
                            />
                        )}
                    </AnimatePresence>
                </div>

                <motion.div 
                    className="absolute bottom-2 right-0 z-20 w-full max-w-[450px] backdrop-blur-2xl xl:gap-4 place-items-center lg:mr-5 lg:pl-3 shadow-gray-950/50 p-2 shadow-lg rounded-lg hover:scale-104 h-28 hover:h-32 transition-all opacity-50 hover:opacity-100 flex justify-center gap-10"
                    drag 
                    dragConstraints={{ left: -300, right: 300, top: -150, bottom: 150 }} 
                    dragElastic={0.9} 
                    dragMomentum={false} 
                    whileTap={{ cursor: "grabbing" }} 
                    transition={{
                        type: "spring", 
                        stiffness: 400,
                        damping: 550, 
                        duration: 0.1 
                    }} 
                >
                    {images.map((imgSrc, index) => (
                        selectedIndex !== index && (
                            <motion.div 
                                key={index} 
                                onClick={() => handleClick(index)}
                                className="w-40 md:w-32 sm:w-24 sm:h-24 cursor-pointer transition-all duration-300 "
                                whileHover={{ scale: 1.05 }} 
                            >
                                <img
                                    src={imgSrc}
                                    alt=""
                                    className="object-cover w-full h-full shadow-md shadow-gray-950 rounded-md opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-300"
                                />
                            </motion.div>
                        )
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};
