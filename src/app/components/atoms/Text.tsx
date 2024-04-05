import React from 'react'

type TextProps = {
  classes?: string
  children: React.ReactNode
}

const Text = (props: TextProps) => {
  const classNames = `${props.classes || ''}`
  return <p className={classNames}>{props.children}</p>
}

export default Text
