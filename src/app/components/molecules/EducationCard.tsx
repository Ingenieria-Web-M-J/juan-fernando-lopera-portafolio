import React from 'react'
import { DurationText, Text, Title } from '../atoms'

type EducationCardProps = {
  title: string
  text: string
  initial: string
  final: string
  educationType: string
  description: string
}

// Este componente se creó con la finalidad de ser usado en todos los lugares donde se requiera mostrar una tarjeta de educación.
// La propiedad "title" es la que se encarga de recibir el título de la educación.
// La propiedad "text" es la que se encarga de recibir el texto que se desea mostrar.
// La propiedad "initial" es la que se encarga de recibir la fecha de inicio.
// La propiedad "final" es la que se encarga de recibir la fecha de finalización.
// La propiedad "educationType" es la que se encarga de recibir el tipo de educación.
// La propiedad "description" es la que se encarga de recibir la descripción de la educación.
// Se hace uso de los átomos "Title", "Text" y "DurationText".
// Cuenta con animaciones de hover las cuales cambian el color del fondo, el color del texto y la escala del componente.
const EducationCard = (props: EducationCardProps) => {
  return (
    <div className="flex w-full flex-col gap-4 bg-white py-5 shadow-md shadow-white/40 lg:flex-row">
      <div className=" flex flex-col items-center px-6">
        <Title title={props.title} classes='whitespace-nowrap' />
        <div className="my-4 flex items-center lg:justify-between">
          <Text classes="whitespace-nowrap"> {props.text} </Text>
          <DurationText initial={props.initial} final={props.final} />
        </div>
      </div>
      <div className="flex flex-col gap-2 px-6">
        <Title title={props.educationType} />
        <Text classes="text text-justify">{props.description}</Text>
      </div>
    </div>
  )
}

export default EducationCard
