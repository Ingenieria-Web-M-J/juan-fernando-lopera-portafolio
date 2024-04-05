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
    <div className="flex w-full flex-col gap-4 bg-white py-5 shadow-md shadow-white/40 lg:flex-row">
      <div className=" flex flex-col items-center px-6">
        <Title title={props.title} />
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
