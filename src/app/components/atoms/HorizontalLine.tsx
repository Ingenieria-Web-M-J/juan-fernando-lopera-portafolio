import React from 'react'

type HorizontalLineProps = {
  margin?: string
}

// Este átomo se creó con la finalidad de ser usado en todos los lugares donde se requiera mostrar una línea horizontal.
// La propiedad "margin" es la que se encarga de recibir el margen que se desea agregar a la línea horizontal. 
//Por defecto, el margen es de 4.
const HorizontalLine = (props: HorizontalLineProps) => {
  return <hr className={`mx-auto h-px w-10/12 ${props.margin || 'my-4'}`} />
}

export default HorizontalLine
