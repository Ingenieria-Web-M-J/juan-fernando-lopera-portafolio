import React from 'react'
import { Icon, Title, Text} from '../atoms'

type KnowledgeCardProps = {
    icon: string
    title: string
    text: string
}

const KnowledgeCard = (props: KnowledgeCardProps) => {
  return (
    <>
        <div className='flex flex-col items-center bg-white border-solid rounded-sm p-5'>
            <Icon icon={props.icon} classes='text-6xl text-lime-500'/>
            <Title title={props.title} classes='my-3'/>
            <Text text={props.text}/>
        </div>
    </>
  )
}

export default KnowledgeCard