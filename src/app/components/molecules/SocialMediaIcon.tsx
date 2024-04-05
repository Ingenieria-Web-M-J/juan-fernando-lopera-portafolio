import React from 'react'
import { Icon } from '../atoms'

type SocialMediaIconProps = {
  icon: string
  iconClasses?: string
  link: string
}

// Este componente se creó con la finalidad de ser usado en todos los lugares donde se requiera mostrar un ícono de una red social.
// La propiedad "icon" es la que se encarga de recibir el nombre del ícono que se desea mostrar.
// La propiedad "iconClasses" es la que se encarga de recibir las clases que se desean agregar al ícono.
// La propiedad "link" es la que se encarga de recibir el enlace de la red social.
// Se hace uso del átomo "Icon".
// Cuenta con animaciones de hover las cuales cambian el color del fondo y el color del texto.
const SocialMediaIcon = (props: SocialMediaIconProps) => {
  return (
    <a
      href={props.link}
      className="flex items-center justify-center  rounded-full bg-slate-900 p-2 hover:bg-slate-700 hover:transition-colors hover:duration-1000"
    >
      <Icon
        icon={props.icon}
        classes={`text-4xl  ${props.iconClasses || ''}`}
      />
    </a>
  )
}

export default SocialMediaIcon
