import React from 'react'
import { EducationInfo, KnowledgeInfo, MainInfo, PortfolioInfo } from '../organisms'
import { Text } from '../atoms'

const CentralSide = () => {
    return (
        <section className="flex-grow bg-slate-900 w-full gap-4 flex flex-col ">
            <MainInfo />
            <KnowledgeInfo />
            <EducationInfo />
            <PortfolioInfo />
            <footer className="lg:mx-5 bg-white text-center rounded-sm py-1">
                <Text classes='text-lg'>2024. All Rights Reserved. </Text>
            </footer>
        </section>
    )
}

export default CentralSide