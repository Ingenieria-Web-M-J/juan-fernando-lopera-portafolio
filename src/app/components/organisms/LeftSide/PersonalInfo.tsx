import React from 'react'
import { HorizontalLine, Image, Text } from '../../atoms'
import { AlignedText } from '../../molecules'

// Este organismo se creó con la finalidad de ser usado en la sección de información personal.
// Se hace uso del componente "AlignedText" y de los átomos "Image" y "Text".
// Se muestra la información personal del estudiante.
// Se hace uso de los átomos "HorizontalLine", "Image" y "Text" y del componente "AlignedText".

const PersonalInfo = () => {
  return (
    <>
      <Image
        src="/img-rounded-bg.jpg"
        alt="Juan Fernando Lopera Muñoz"
        classes="rounded-full w-64 h-64 lg:w-32 lg:h-32 mx-auto"
      />
      <Text classes="text-center text-2xl font-bold"> Juan Fernando</Text>
      <Text classes="text-center text-xl"> Lopera Muñoz</Text>
      <Text classes="text-center italic whitespace-nowrap">
        {' '}
        Systems engineering student
      </Text>
      <Text classes="text-center italic"> UdeA</Text>
      <HorizontalLine />
      <AlignedText
        leftText="Age:"
        rightText="23"
        rightTextClasses="font-semibold text-lime-500"
      />
      <AlignedText leftText="Residence:" rightText="CO" />
      <AlignedText
        leftText="Freelance:"
        rightText="No available"
        rightTextClasses="font-semibold text-red-500"
      />
      <AlignedText leftText="Address:" rightText="Medellín, Colombia" />
      <HorizontalLine />
    </>
  )
}

export default PersonalInfo
