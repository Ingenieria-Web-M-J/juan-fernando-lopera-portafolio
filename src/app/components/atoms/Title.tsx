import React from 'react'

type TitleProps = {
  title: string
  size?: string
  classes?: string
}

const Title = (props: TitleProps) => {
  return (
    <h2 className={`font-sans ${props.size || 'text-xl'} font-semibold text-center ${props.classes || ''}`}>{props.title}</h2>
  )
}

export default Title