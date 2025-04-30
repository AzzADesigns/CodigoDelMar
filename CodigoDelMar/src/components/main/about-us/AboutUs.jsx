import React from 'react'
import { ContactButton } from '../../shared/ContactButton'

export const AboutUs = () => {
    return (
        <div className="relative w-full min-h-screen xl:h-screen overflow-hidden bg-[url('/aboutusbanner.jpg')] bg-cover bg-center bg-fixed">
 
        
            <section className="relative z-20 flex items-center min-h-screen justify-center h-full p-5 xl:p-0  text-indigo-50">
                <div className="w-96 sm:w-[90%] md:w-[85%] lg:w-[90%] xl:max-w-6xl h-auto md:h-[65%]  backdrop-blur-[150px] shadow-2xl shadow-gray-950 rounded-3xl justify-between flex flex-col xl:flex-row items-center p-5">
                    <img
                        src="/about-us.png"
                        alt=""
                        className="h-40 sm:h-52 md:h-60 xl:h-full w-[95%] sm:w-full  xl:w-[40%] object-cover rounded-xl"
                    />
                    <div className="xl:w-[56%] w-full  h-full flex flex-col justify-center items-center lg:items-start lg:mt-5  xl:mt-16 gap-5 sm:gap-6 md:gap-10 xl:gap-5  leading-relaxed 2xl:gap-5 p-3 xl:p-0">
                        <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl">Sobre Nosotros</h2>
                        <h3 className="text-lg sm:text-xl md:text-2xl xl:text-3xl">Tecnología de alto nivel, con visión estratégica.</h3>
                        <div className="h-full flex flex-col gap-5 sm:gap-6 md:gap-10 xl:gap-5  2xl:gap-5 justify-center w-full">
                            <p className="text-sm sm:text-base md:text-lg xl:text-2xl flex items-center lg:items-start leading-relaxed">
                                Desde Mar del Plata, desarrollamos software con estándares globales. Aplicamos metodologías ágiles, herramientas modernas y una mirada centrada en resultados para acompañar a empresas en su evolución digital.
                            </p>

                            <div className='w-full flex justify-center lg:justify-normal'>
                                <ContactButton />
                            </div>
                            <p className=" sm:text-base text-xl font-light hidden lg:block">De Mar del Plata, al mundo</p>
                        </div>
                    </div>
                </div> 
            </section>
        
        </div>
    )
}
