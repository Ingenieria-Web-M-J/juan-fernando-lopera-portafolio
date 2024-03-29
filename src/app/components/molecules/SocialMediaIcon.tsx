import React from 'react'
import { Icon } from '../atoms'

type SocialMediaIconProps = {
    icon: string
    iconClasses?: string
    link: string
}

const SocialMediaIcon = (props: SocialMediaIconProps) => {
    return (
        <div className='w-16 h-16 flex flex-col items-center justify-center bg-lime-400 border-none rounded-full p-1 mt-2 mb-5'>
            <a href={props.link}>
                <Icon icon={props.icon} classes={`mt-1 text-5xl ${props.iconClasses || ''}`}></Icon>
            </a>
        </div>
    )
}

export default SocialMediaIcon