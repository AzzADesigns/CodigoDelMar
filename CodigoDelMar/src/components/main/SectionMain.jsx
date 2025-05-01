import React from 'react'
import { Services } from './services/Services'
import { AboutUs } from './about-us/AboutUs'
import { Projects } from './projects/Projects'
import Contact from './contact/Contact'
import Footer from './footer/Footer'



export const SectionMain = () => {
    return (
        <section className='w-full'>
            <div>
                <div id="servicios">
                    <Services />
                </div>
                <div id="nosotros">
                    <AboutUs />
                </div>
                <div id="proyectos">
                    <Projects />
                </div>
                <div id="contacto">
                    <Contact />
                </div>
                <Footer />
            </div>
        </section>
    );
};
  