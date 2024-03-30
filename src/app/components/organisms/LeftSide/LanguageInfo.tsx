import React from 'react'

import { LanguageInfo } from '../../molecules'
import { HorizontalLine, Title } from '../../atoms'

const Languages = () => {
  return (
    <>
      <Title title='Languages' />
      <LanguageInfo language='Spanish' percentage={100} />
      <LanguageInfo language='English' percentage={50} />
      <HorizontalLine />
    </>
  )
}

export default Languages