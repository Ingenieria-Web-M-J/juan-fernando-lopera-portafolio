import React from 'react'

type IconProps = {
    icon: string
    classes?: string
}

const Icon = (props: IconProps) => {
    const iconClasses = `icon-${props.icon} ${props.classes || ''}`;
    return (
        <>
        <span className={iconClasses}></span>
        </>
    );
}

export default Icon