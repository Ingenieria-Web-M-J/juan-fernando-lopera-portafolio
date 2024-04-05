import React from 'react'

import { LanguageInfo } from '../../molecules'
import { Title, HorizontalLine } from '../../atoms'

// Este organismo se creó con la finalidad de ser usado en la sección de lenguajes.
// Se hace uso del componente "LanguageInfo" y de los átomos "Title" y "HorizontalLine".

const Frameworks = () => {
  return (
    <>
      <Title title="Frameworks" />
      <LanguageInfo language="Spring" percentage={50} />
      <LanguageInfo language="Django" percentage={70} />
      <LanguageInfo language="React" percentage={40} />
      <HorizontalLine margin="my-4" />
    </>
  )
}

export default Frameworks
