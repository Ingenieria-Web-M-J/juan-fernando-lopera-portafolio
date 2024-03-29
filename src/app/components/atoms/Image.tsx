import React from 'react'

type ImageProps = {
    src?: string
    alt?: string
    classes?: string
}

const Image = (props: ImageProps) => {
    return (
        <img src={props.src} alt={props.alt} className={`${props.classes || ''}`}/>
    )
}

export default Image