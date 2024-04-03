import React from 'react'

type TextProps = {
  text?: string
  classes?: string
  children: React.ReactNode
}

const Text = (props: TextProps) => {
  const classNames = `${props.classes || ''}`
  return (
    <p className={classNames}>{props.children}</p>
  )
}

export default Text