import React from 'react'
import { Services } from './services/Services'
import { AboutUs } from './about-us/AboutUs'
import { Projects } from './projects/Projects'
import Contact from './contact/Contact'
import Footer from './footer/Footer'



export const SectionMain = () => {
  return (
    <section className='w-full '>
        <div>
            <Services/>
            <AboutUs/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    </section>
  )
}
