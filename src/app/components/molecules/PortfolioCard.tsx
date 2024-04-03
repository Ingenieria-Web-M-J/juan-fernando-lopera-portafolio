import React from 'react'
import { Icon, Title, Text } from '../atoms'

type PortfolioCardProps = {
  icon: string
  title: string
  text: string
  url: string
}

const PortfolioCard = (props: PortfolioCardProps) => {
  return (
    <div className='flex flex-col h-full items-center bg-white text-slate-900 border-solid rounded p-5 text-justify shadow-md shadow-white/40 hover:scale-95 transition-all duration-1000 hover:bg-slate-700 hover:text-white hover:decoration-white '>
      <Icon icon={props.icon} classes='text-6xl' />
      <Title title={props.title} classes='my-3' />
      <Text>{props.text}</Text>
      <a className="underline decoration-double decoration-4 underline-offset-8 text-sm font-semibold rounded-sm py-2 px-4 my-2 mt-auto" href={props.url} target="_blank">Repository</a>
    </div>
  )
}
//"underline text-slate-900 decoration-slate-900 decoration-double decoration-4 underline-offset-8
//
export default PortfolioCard