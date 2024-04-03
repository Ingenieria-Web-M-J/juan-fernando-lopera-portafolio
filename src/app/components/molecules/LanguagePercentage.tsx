import React from 'react'
import { PercentageBar } from '../atoms'
import AlignedText from './AlignedText'

type LanguageInfoProps = {
  language: string
  percentage: number
}

const LanguageInfo = (props: LanguageInfoProps) => {

  return (
    <>
      <AlignedText leftText={props.language} rightText={`${props.percentage}%`} />
      <PercentageBar percentage={props.percentage} />
    </>
  )
}

export default LanguageInfo



