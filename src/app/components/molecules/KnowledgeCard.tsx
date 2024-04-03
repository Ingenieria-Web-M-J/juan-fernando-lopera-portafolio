import React from 'react'
import { Icon, Title, Text } from '../atoms'


type KnowledgeCardProps = {
  icon: string
  title: string
  text: string
}

const KnowledgeCard = (props: KnowledgeCardProps) => {
  return (
    <div className='flex flex-col items-center bg-white border-solid rounded p-5 shadow-md transition-all duration-1000 text-slate-900 shadow-white/40 hover:scale-95 hover:bg-slate-700 hover:text-white'>
      <Icon icon={props.icon} classes='text-6xl' />
      <Title title={props.title} classes='my-3' />
      <Text>{props.text}</Text>
    </div>
  )
}

export default KnowledgeCard