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
        <>
            <div className='bg-white flex py-5'>
                <div className='ml-12 mr-24 w-3/12'>
                    <Title title={props.title} />
                    <div className='flex justify-between items-center my-4'>
                        <Text text={props.text} />
                        <DurationText initial={props.initial} final={props.final} />
                    </div>
                </div>
                <div className='pr-10'>
                    <Title title={props.educationType} />
                    <Text text={props.description} classes='text-sm text-justify'/>
                </div>
            </div>
        </>
    )
}

export default EducationCard