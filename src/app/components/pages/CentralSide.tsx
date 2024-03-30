import React from 'react'
import { EducationInfo, KnowledgeInfo, MainInfo, PortfolioInfo } from '../organisms'
import { Text } from '../atoms'

const CentralSide = () => {
    return (
        <>
            <section className="flex-grow bg-blue-50 w-2/3 ">
                <div className='w-full'>
                    <MainInfo />
                </div>
                <div className="w-full text-center">
                    <KnowledgeInfo />
                </div>
                <div className="w-full">
                    <EducationInfo />
                </div>
                <div className='w-full'>
                    <PortfolioInfo />
                </div>
                <footer className="mx-5 bg-white text-center py-1 ">
                    <Text text='2024. All Rights Reserved.' classes='text-xl' />
                </footer>
            </section>

        </>
    )
}

export default CentralSide