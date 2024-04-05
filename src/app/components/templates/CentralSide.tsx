import React from 'react'
import {
  EducationInfo,
  KnowledgeInfo,
  MainInfo,
  PortfolioInfo,
} from '../organisms'
import { Text } from '../atoms'

// Este template se creó con la finalidad de ser usado en la sección central de la página.
// Se hace uso de los organismos "MainInfo", "KnowledgeInfo", "EducationInfo" y "PortfolioInfo".
// Además, se hace uso del átomo "Text" el cual se utiliza para el footer de la página.

const CentralSide = () => {
  return (
    <section className="flex w-full flex-grow flex-col gap-4 bg-slate-900 ">
      <MainInfo />
      <KnowledgeInfo />
      <EducationInfo />
      <PortfolioInfo />
      <footer className="rounded-sm bg-white py-1 text-center lg:mx-5">
        <Text classes="text-lg">2024. All Rights Reserved. </Text>
      </footer>
    </section>
  )
}

export default CentralSide
