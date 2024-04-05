import React from 'react'
import {
  Languages,
  ProgrammingLanguages,
  Frameworks,
  PersonalInfo,
  ExtraSkills,
} from '../organisms'

const LeftSide = () => {
  return (
    <section className="w-full bg-white px-4 lg:w-fit">
      <PersonalInfo />
      <Languages />
      <ProgrammingLanguages />
      <Frameworks />
      <ExtraSkills />
    </section>
  )
}

export default LeftSide
