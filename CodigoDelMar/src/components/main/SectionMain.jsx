import React from 'react'
import { Services } from './services/Services'
import { AboutUs } from './about-us/AboutUs'

export const SectionMain = () => {
  return (
    <section className='w-full '>
        <div>
            <Services/>


            <AboutUs/>
        </div>
    </section>
  )
}
