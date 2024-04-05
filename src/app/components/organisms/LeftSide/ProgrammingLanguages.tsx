import React from 'react'
import { HorizontalLine, Title } from '../../atoms'
import { LanguageInfo } from '../../molecules'

// Este organismo se creó con la finalidad de ser usado en la sección de lenguajes.
// Se hace uso del componente "LanguageInfo" y de los átomos "Title" y "HorizontalLine".

const ProgrammingLanguages = () => {
  return (
    <>
      <Title title="Programming Languages" classes="whitespace-nowrap" />
      <LanguageInfo language="Java" percentage={70} />
      <LanguageInfo language="Python" percentage={60} />
      <LanguageInfo language="Javascript" percentage={40} />
      <HorizontalLine />
    </>
  )
}

export default ProgrammingLanguages
