import React from 'react';
import { motion } from 'framer-motion';

export const Services = () => {

    const services = [
        {
            Title: "Desarrollo de Aplicaciones",
            Description: "Transformamos tus ideas en soluciones digitales funcionales con Python y tecnologías modernas.",
            Image: "app-card.jpg"
        },
        {
            Title: "Desarrollo Web",
            Description: "Diseñamos sitios web responsivos y profesionales que potencian tu presencia digital.",
            Image: "web-card.jpg"
        },
        {
            Title: "Asesoramiento",
            Description: "Ofrecemos guía experta para implementar soluciones tecnológicas efectivas en tu negocio.",
            Image: "asesor-card.jpg"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 mt-20 xl:mt-0"
             style={{ backgroundImage: `url('/mi-fondo-card.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            
            <motion.h2 
                className="text-5xl font-bold mb-16 lg:mb-32"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                Nuestros Servicios
            </motion.h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-3 2xl:w-[87%]  justify-items-center group relative">
                {services.map((service, index) => (
                    <motion.div 
                        key={index}
                        className="relative w-96 2xl:w-[500px] h-[500px] transition-all duration-300 ease-in-out z-10 
                                   group-hover:blur-sm hover:!blur-none hover:z-20"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                    >
                        <div 
                            className="bg-indigo-50 w-full h-full rounded-xl border border-indigo-200/50 
                                       hover:border-indigo-300/50 hover:shadow-2xl hover:shadow-black/30 overflow-visible transform 
                                       hover:-translate-y-2 hover:scale-105 xl:hover:scale-100 2xl:hover:scale-105 hover:shadow-3xl 
                                       transition-all duration-300 flex flex-col justify-center items-center relative group/card"
                        >
                            <div className="p-6 text-center w-full">
                                <h3 className="text-xl lg:text-2xl 2xl:text-4xl font-bold text-gray-800 mb-10 lg:mb-2">
                                    {service.Title}
                                </h3>
                                <p className="text-gray-600 px-2 lg:p-0 lg:w-full lg:text-2xl">
                                    {service.Description}
                                </p>
                            </div>
                            
                            <div className="relative w-80 lg:w-[95%] h-72 mb-3 overflow-hidden rounded-lg">
                                <img 
                                    src={service.Image} 
                                    alt={service.Title} 
                                    className="w-full h-full object-cover transform transition-all duration-500 ease-out
                                               group-hover/card:scale-110 group-hover/card:rotate-[0.5deg]"
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
