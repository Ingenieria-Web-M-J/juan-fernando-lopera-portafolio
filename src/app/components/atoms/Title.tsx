import React from 'react'

type TitleProps = {
  title: string
  size?: string
  classes?: string
}

// Este átomo se creó con la finalidad de ser usado en todos los lugares donde se requiera ingresar un título.
// Adicionalmente, cuenta con las propiedades 'classes' que permite colocarle estilo o propiedades de tailwind para
// tener mayor flexibilidad a la hora de usarlo en otros lugares.
// La propiedad 'size' permite definir el tamaño del título, por defecto es 'text-xl' pero puede ser cambiado a 'text-2xl', 'text-3xl', etc.
const Title = (props: TitleProps) => {
  return (
    <h2
      className={`${props.size || 'text-xl'} text-center font-semibold ${props.classes || ''}`}
    >
      {props.title}
    </h2>
  )
}

export default Title
