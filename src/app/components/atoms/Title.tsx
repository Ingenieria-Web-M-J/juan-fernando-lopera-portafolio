import React from 'react'

type TitleProps = {
  title: string
  classes?: string
}

const Title = (props:TitleProps) => {
  return (
    <h1 className={`text-xl font-bold text-center text-black ${props.classes || ''}`}>{props.title}</h1>
  )
}

export default Title