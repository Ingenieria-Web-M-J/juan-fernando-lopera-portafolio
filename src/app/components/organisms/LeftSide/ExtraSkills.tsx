import React from 'react'
import { HorizontalLine, Title } from '../../atoms'
import { IconText } from '../../molecules'

// Este organismo se creó con la finalidad de ser usado en la sección de habilidades adicionales.
// Se hace uso del componente "IconText" y del átomo "Title".
// Se muestra un título y tres íconos con texto.
// Se hace uso de los íconos de la librería "Material Design Icons" traidos desde Iconify.
const ExtraSkills = () => {
  return (
    <>
      <Title title="Extra Skills" />
      <IconText
        icon="icon-[mdi--git]"
        text="Git"
        iconClasses="text-2xl text-slate-900"
      />
      <IconText
        icon="icon-[mdi--github]"
        text="Github"
        iconClasses="text-2xl text-slate-900"
      />
      <IconText
        icon="icon-[mdi--linux]"
        text="Linux"
        iconClasses="text-2xl text-slate-900"
      />
      <HorizontalLine />
    </>
  )
}

export default ExtraSkills
