import React from 'react'
import { Icon } from '../atoms'

type SocialMediaIconProps = {
    icon: string
    iconClasses?: string
    link: string
}

const SocialMediaIcon = (props: SocialMediaIconProps) => {
    return (
        <div className=''>
            <a href={props.link} className='flex items-center justify-center bg-slate-900 rounded-full p-2 my-2'>
                <Icon icon={props.icon} classes={`text-4xl ${props.iconClasses || ''}`}></Icon>
            </a>
        </div>
    )
}

export default SocialMediaIcon