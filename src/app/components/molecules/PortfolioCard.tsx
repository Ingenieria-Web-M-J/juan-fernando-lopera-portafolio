import React from 'react'
import { Icon, Title, Text } from '../atoms'

type PortfolioCardProps = {
  icon: string
  title: string
  text: string
  url: string
}

// Este componente se creó con la finalidad de ser usado en todos los lugares donde se requiera mostrar una tarjeta de portafolio.
// La propiedad "icon" es la que se encarga de recibir el nombre del ícono que se desea mostrar.
// La propiedad "title" es la que se encarga de recibir el título que se desea mostrar.
// La propiedad "text" es la que se encarga de recibir el texto que se desea mostrar.
// La propiedad "url" es la que se encarga de recibir la URL del repositorio.
// Se hace uso de los átomos "Icon", "Title" y "Text".
// Cuenta con animaciones de hover las cuales cambian el color del fondo, el color del texto y la escala del componente.
const PortfolioCard = (props: PortfolioCardProps) => {
  return (
    <div className="flex h-full flex-col items-center rounded border-solid bg-white p-5 text-justify text-slate-900 shadow-md shadow-white/40 transition-all duration-1000 cursor-pointer hover:scale-95 hover:bg-slate-700 hover:text-white hover:decoration-white ">
      <Icon icon={props.icon} classes="text-6xl" />
      <Title title={props.title} classes="my-3" />
      <Text>{props.text}</Text>
      <a
        className="my-2 mt-auto rounded-sm px-4 py-2 text-sm font-semibold underline decoration-double decoration-4 underline-offset-8"
        href={props.url}
        target="_blank"
      >
        Repository
      </a>
    </div>
  )
}
//"underline text-slate-900 decoration-slate-900 decoration-double decoration-4 underline-offset-8
//
export default PortfolioCard
