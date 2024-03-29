import React from 'react'

type TextProps = {
    text: string
    classes?: string
}

const Text = (props: TextProps) => {
  const classNames = `font-sans ${props.classes || ''}`
  return (
    <p className={classNames}>{props.text}</p>
  )
}

export default Text