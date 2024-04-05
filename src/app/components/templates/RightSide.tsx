import React from 'react'
import { Title } from '../atoms'
import { SocialMedia } from '../organisms'

// Este organismo se creó con la finalidad de ser usado en la sección de redes sociales que estará al lado derecho.
// Se hace uso del componente "SocialMedia".

const RightSide = () => {
  return (
    <section className="flex flex-row items-center justify-center gap-2 bg-white p-2 lg:flex-col lg:justify-start  ">
      <Title title="Links" classes="hidden lg:block" />
      <SocialMedia />
    </section>
  )
}

export default RightSide
