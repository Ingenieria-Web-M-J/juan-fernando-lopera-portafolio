import React from 'react'
import {
  Languages,
  ProgrammingLanguages,
  Frameworks,
  PersonalInfo,
  ExtraSkills,
} from '../organisms'

// Este template se creó con la finalidad de ser usado en la sección izquierda mostrando la info personal y las habilidades técnicas, entre otras.
// Se hace uso de los organismos "Languages", "ProgrammingLanguages", "Frameworks", "PersonalInfo" y "ExtraSkills".

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
