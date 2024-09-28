import React from 'react'
import {EDUCATION} from '../constants/index'

function EducationSection() {
  return (
    <section className='py-8' id='education'>
        <h2 className='mb-4 text-center text-3xl font-bold'>Education</h2>
        {
            EDUCATION.map((edu,index)=>(
                <div className='mb-6 p-10' key={index}>
                <h3 className='text-xl font-semibold '>{edu.degree}</h3>
                <p className='text-sm text-stone-300 '>{edu.institution}</p>
                <p className='mt-2'>{edu.description}</p>
                </div>
            ))
        }
    </section>
  )
}

export default EducationSection