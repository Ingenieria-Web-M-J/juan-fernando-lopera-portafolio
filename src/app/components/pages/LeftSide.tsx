import React from 'react'
import { Languages, ProgrammingLanguages, Frameworks, PersonalInfo, ExtraSkills } from '../organisms'

const LeftSide = () => {
  return (
    <>
      <section className='bg-white px-2'>
        <PersonalInfo />
        <Languages />
        <ProgrammingLanguages />
        <Frameworks />
        <ExtraSkills />
      </section>
    </>
  )
}

export default LeftSide