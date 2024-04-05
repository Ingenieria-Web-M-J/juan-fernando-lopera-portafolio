import React from 'react'
import {
  EducationInfo,
  KnowledgeInfo,
  MainInfo,
  PortfolioInfo,
} from '../organisms'
import { Text } from '../atoms'

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
