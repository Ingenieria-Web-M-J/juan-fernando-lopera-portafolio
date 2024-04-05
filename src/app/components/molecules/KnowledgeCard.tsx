import React from 'react'
import { Icon, Title, Text } from '../atoms'

type KnowledgeCardProps = {
  icon: string
  title: string
  text: string
}

// Este componente se creó con la finalidad de ser usado en todos los lugares donde se requiera mostrar una tarjeta de conocimiento.
// La propiedad "icon" es la que se encarga de recibir el nombre del ícono que se desea mostrar.
// La propiedad "title" es la que se encarga de recibir el título que se desea mostrar.
// La propiedad "text" es la que se encarga de recibir el texto que se desea mostrar.
// Se hace uso de los átomos "Icon", "Title" y "Text".
// Cuenta con animaciones de hover las cuales cambian el color del fondo, el color del texto y la escala del componente.
const KnowledgeCard = (props: KnowledgeCardProps) => {
  return (
    <div className="flex flex-col items-center rounded border-solid bg-white p-5 text-slate-900 shadow-md shadow-white/40 transition-all duration-1000 hover:scale-95 hover:bg-slate-700 hover:text-white">
      <Icon icon={props.icon} classes="text-6xl" />
      <Title title={props.title} classes="my-3" />
      <Text>{props.text}</Text>
    </div>
  )
}

export default KnowledgeCard
