import React from 'react'

import { Text } from '../atoms'

type AlignedTextProps = {
  leftText: string
  leftTextClasses?: string
  rightText: string
  rightTextClasses?: string
}

// Este componente se creó con la finalidad de ser usado en todos los lugares donde se requiera mostrar texto alineado.
// La propiedad "leftText" es la que se encarga de recibir el texto que se desea mostrar a la izquierda.
// La propiedad "leftTextClasses" es la que se encarga de recibir las clases que se desean agregar al texto de la izquierda.
// La propiedad "rightText" es la que se encarga de recibir el texto que se desea mostrar a la derecha.
// La propiedad "rightTextClasses" es la que se encarga de recibir las clases que se desean agregar al texto de la derecha.
const AlignedText = (props: AlignedTextProps) => {
  const rightTextClasses = `text-right ${props.rightTextClasses || ''}`
  const leftTextClasses = `text-left ${props.leftTextClasses || ''}`
  return (
    <div className="mb-1 mt-2 flex justify-between">
      <Text classes={leftTextClasses}>{props.leftText}</Text>
      <Text classes={rightTextClasses}>{props.rightText}</Text>
    </div>
  )
}

export default AlignedText
