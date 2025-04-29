import React from 'react'
import { Services } from './services/Services'
import { AboutUs } from './about-us/AboutUs'
import { Projects } from './projects/Projects'



export const SectionMain = () => {
  return (
    <section className='w-full '>
        <div>
            <Services/>
            <AboutUs/>
            <Projects/>
        </div>
    </section>
  )
}
