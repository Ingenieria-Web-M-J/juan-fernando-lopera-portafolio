import React from 'react'
import { Text, Icon } from '../atoms'

type IconTextProps = {
  icon: string
  iconClasses?: string
  text: string
}

// Este componente se creó con la finalidad de ser usado en todos los lugares donde se requiera mostrar un ícono con texto.
// La propiedad "icon" es la que se encarga de recibir el nombre del ícono que se desea mostrar.
// La propiedad "iconClasses" es la que se encarga de recibir las clases que se desean agregar al ícono.
// La propiedad "text" es la que se encarga de recibir el texto que se desea mostrar.
// Se hace uso de los átomos "Text" e "Icon".
const IconText = (props: IconTextProps) => {
  return (
    <div className="my-1 flex items-center">
      <Icon icon={props.icon} classes={`${props.iconClasses} ml-4 mr-2`} />
      <Text>{props.text}</Text>
    </div>
  )
}

export default IconText
