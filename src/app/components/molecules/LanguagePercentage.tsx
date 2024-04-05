import React from 'react'
import { PercentageBar } from '../atoms'
import AlignedText from './AlignedText'

type LanguageInfoProps = {
  language: string
  percentage: number
}

// Este componente se creó con la finalidad de ser usado en todos los lugares donde se requiera 
//mostrar información sobre un lenguaje de programación o un idioma. 
//Las propiedades "language" y "percentage" son las que se encargan de recibir el nombre del lenguaje o idioma
//y el porcentaje de dominio que se tiene sobre el mismo, respectivamente.
//Se hace uso de los átomos "PercentageBar" y "AlignedText".
const LanguageInfo = (props: LanguageInfoProps) => {
  return (
    <>
      <AlignedText
        leftText={props.language}
        rightText={`${props.percentage}%`}
      />
      <PercentageBar percentage={props.percentage} />
    </>
  )
}

export default LanguageInfo
