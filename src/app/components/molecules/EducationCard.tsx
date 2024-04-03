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

const EducationCard = (props: EducationCardProps) => {
    return (
        <div className='bg-white flex py-5 shadow-md shadow-white/40 w-full gap-4 flex-col lg:flex-row'>
            <div className=' px-6 flex flex-col items-center'>
                <Title title={props.title} />
                <div className='flex lg:justify-between items-center my-4'>
                    <Text classes='whitespace-nowrap'> {props.text} </Text>
                        <DurationText initial={props.initial} final={props.final} />
                </div>
            </div>
            <div className='px-6 gap-2 flex flex-col'>
                <Title title={props.educationType} />
                <Text classes='text text-justify'>{props.description}</Text>
            </div>
        </div>
    )
}

export default EducationCard