import React from 'react'
import { Icon, Title, Text} from '../atoms'

type PortfolioCardProps = {
    icon: string
    title: string
    text: string
    url: string
}

const PortfolioCard = (props: PortfolioCardProps) => {
  return (
    <>
        <div className='flex flex-col items-center bg-white border-solid rounded p-5 text-justify'>
            <Icon icon={props.icon} classes='text-6xl text-blue-700'/>
            <Title title={props.title} classes='my-3'/>
            <Text text={props.text}/>
            <a className="underline text-blue-700 decoration-blue-700 decoration-double decoration-4 underline-offset-8 hover:no-underline" href={props.url}>Repository</a>
        </div>
    </>
  )
}

export default PortfolioCard