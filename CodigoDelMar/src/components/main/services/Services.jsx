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
        <div 
            className="min-h-screen w-full max-w-7xl mx-auto flex flex-col items-center justify-center px-4 sm:px-6 lg:px-16 py-16 mt-20 xl:mt-0"
            style={{ backgroundImage: `url('/mi-fondo-card.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 md:mb-20 text-center"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                Nuestros Servicios
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3  w-full justify-items-center">
                {services.map((service, index) => (
                    <motion.div 
                        key={index}
                        className="relative w-full max-w-sm h-[450px] transition-all duration-300 ease-in-out z-10
                                   group-hover:blur-sm hover:!blur-none hover:z-20"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                    >
                        <div className="bg-indigo-50 w-full h-full rounded-xl border border-indigo-200/50 
                                        hover:border-indigo-300/50 hover:shadow-2xl hover:shadow-black/30 overflow-hidden 
                                        hover:-translate-y-2 hover:scale-105 transition-all duration-300 flex flex-col justify-between items-center relative p-6">
                            
                            <div className="text-center">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                                    {service.Title}
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base">
                                    {service.Description}
                                </p>
                            </div>

                            <div className="relative w-full h-48 mt-6 overflow-hidden rounded-lg">
                                <img 
                                    src={service.Image} 
                                    alt={service.Title} 
                                    className="w-full h-full object-cover transform transition-all duration-500 ease-out
                                               group-hover:scale-110 group-hover:rotate-[0.5deg]"
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
