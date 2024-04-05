import React from 'react'

import { LanguageInfo } from '../../molecules'
import { HorizontalLine, Title } from '../../atoms'

// Este organismo se creó con la finalidad de ser usado en la sección de lenguajes.
// Se hace uso del componente "LanguageInfo" y de los átomos "Title" y "HorizontalLine".

const Languages = () => {
  return (
    <>
      <Title title="Languages" />
      <LanguageInfo language="Spanish" percentage={100} />
      <LanguageInfo language="English" percentage={50} />
      <HorizontalLine />
    </>
  )
}

export default Languages
