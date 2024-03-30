import React from 'react'
import { Icon } from '../atoms'

type SocialMediaIconProps = {
    icon: string
    iconClasses?: string
    link: string
}

const SocialMediaIcon = (props: SocialMediaIconProps) => {
    return (
        <div className='flex items-center justify-center bg-lime-400 border-none rounded-full p-2 my-2 mx-1'>
            <a href={props.link}>
                <Icon icon={props.icon} classes={`mt-1 text-4xl ${props.iconClasses || ''}`}></Icon>
            </a>
        </div>
    )
}

export default SocialMediaIcon