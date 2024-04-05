import React from 'react'

type ImageProps = {
  src?: string
  alt?: string
  classes?: string
}

// Este átomo se creó con la finalidad de ser usado en todos los lugares donde se requiera mostrar una imagen.
// Decidí usar este porque me parece que se acopla mejor que el Image de Next.js para lo que buscaba hacer.
const Image = (props: ImageProps) => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      className={`mt-2 ${props.classes || ''}`}
    />
  )
}

export default Image
