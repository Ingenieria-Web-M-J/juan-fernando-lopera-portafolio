import React from 'react'

type ButtonProps = {
    text: string
    size?: string
    classes?: string
    onClick?: () => void
}

const Button = (props: ButtonProps) => {
    return (
        <button className={`bg-slate-900 text-white text-sm font-semibold rounded-sm py-2 px-4 ${props.classes || ''} ${props.size || ''}`} onClick={props.onClick}>{props.text}</button>
    )
}

export default Button