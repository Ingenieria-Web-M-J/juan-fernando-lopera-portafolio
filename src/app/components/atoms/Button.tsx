import React from 'react'

type ButtonProps = {
  text: string
  size?: string
  classes?: string
  onClick?: () => void
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`rounded-sm bg-slate-900 px-4 py-2 text-sm font-semibold text-white ${props.classes || ''} ${props.size || ''}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  )
}

export default Button
