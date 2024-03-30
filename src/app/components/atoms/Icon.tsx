import React from 'react'

type IconProps = {
    icon: string
    classes?: string
}

const Icon = (props: IconProps) => {
    return (
        <>
            <span className={`${props.icon} ${props.classes || ''}`}></span>
        </>
    );
}

export default Icon