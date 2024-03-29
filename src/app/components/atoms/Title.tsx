import React from 'react'

type TitleProps = {
  title: string
  classes?: string
}

const Title = (props:TitleProps) => {
  return (
    <h2 className={`font-sans text-xl font-semibold text-center text-black ${props.classes || ''}`}>{props.title}</h2>
  )
}

export default Title