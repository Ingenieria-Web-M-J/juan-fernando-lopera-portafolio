import React from 'react'

type IconProps = {
  icon: string
  classes?: string
}

// Este átomo se creó con la finalidad de ser usado en todos los lugares donde se requiera mostrar un ícono.
// La propiedad "icon" es la que se encarga de recibir el nombre del ícono que se desea mostrar, mientras que la propiedad "classes" es la que se encarga de recibir las clases que se desean agregar al ícono.
// Adicionalmente, para cargar los íconos se utilizó la librería de íconos de Tailwind CSS proveniente de Iconify.
const Icon = (props: IconProps) => {
  return <span className={`${props.icon} ${props.classes || ''}`}></span>
}

export default Icon
