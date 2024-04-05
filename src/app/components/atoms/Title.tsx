import React from 'react'

type TitleProps = {
  title: string
  size?: string
  classes?: string
}

const Title = (props: TitleProps) => {
  return (
    <h2
      className={`${props.size || 'text-xl'} text-center font-semibold ${props.classes || ''}`}
    >
      {props.title}
    </h2>
  )
}

export default Title
