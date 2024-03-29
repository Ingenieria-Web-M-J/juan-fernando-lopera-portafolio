import React from 'react'
import { Icon } from '../atoms'

type SocialMediaIconProps = {
    icon: string
    iconClasses?: string
    link: string
}

const SocialMediaIcon = (props: SocialMediaIconProps) => {
    return (
        <div className='flex items-center justify-center bg-lime-400 border-none rounded-full p-1 mt-2 mb-5 mr-1'>
            <a href={props.link}>
                <Icon icon={props.icon} classes={`mt-1 text-5xl ${props.iconClasses || ''}`}></Icon>
            </a>
        </div>
    )
}

export default SocialMediaIcon