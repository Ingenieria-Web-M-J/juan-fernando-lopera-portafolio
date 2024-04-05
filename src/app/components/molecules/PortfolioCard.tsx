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
    <div className="flex h-full flex-col items-center rounded border-solid bg-white p-5 text-justify text-slate-900 shadow-md shadow-white/40 transition-all duration-1000 hover:scale-95 hover:bg-slate-700 hover:text-white hover:decoration-white ">
      <Icon icon={props.icon} classes="text-6xl" />
      <Title title={props.title} classes="my-3" />
      <Text>{props.text}</Text>
      <a
        className="my-2 mt-auto rounded-sm px-4 py-2 text-sm font-semibold underline decoration-double decoration-4 underline-offset-8"
        href={props.url}
        target="_blank"
      >
        Repository
      </a>
    </div>
  )
}
//"underline text-slate-900 decoration-slate-900 decoration-double decoration-4 underline-offset-8
//
export default PortfolioCard
