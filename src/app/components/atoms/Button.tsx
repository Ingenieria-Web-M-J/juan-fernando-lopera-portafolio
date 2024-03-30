import React from 'react'

type ButtonProps = {
    text: string
    size?: string
    onClick?: () => void
}

const Button = (props: ButtonProps) => {
    return (
        <>
            <button className={`bg-slate-900 text-white font-sans text-sm font-semibold rounded-sm py-2 px-4 ${props.size || ''}`} onClick={props.onClick}>{props.text}</button>
        </>
    )
}

export default Button