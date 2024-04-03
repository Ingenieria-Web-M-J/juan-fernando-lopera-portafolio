import React from 'react'

import { LanguageInfo } from '../../molecules'
import { Title, HorizontalLine } from '../../atoms'

const Frameworks = () => {
  return (
    <>
      <Title title='Frameworks' />
      <LanguageInfo language='Spring' percentage={50} />
      <LanguageInfo language='Django' percentage={70} />
      <LanguageInfo language='React' percentage={40} />
      <HorizontalLine margin='my-4' />
    </>
  )
}

export default Frameworks