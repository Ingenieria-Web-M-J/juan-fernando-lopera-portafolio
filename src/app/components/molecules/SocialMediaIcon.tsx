import React from 'react'
import { Icon } from '../atoms'

type SocialMediaIconProps = {
  icon: string
  iconClasses?: string
  link: string
}

const SocialMediaIcon = (props: SocialMediaIconProps) => {
  return (
    <a
      href={props.link}
      className="flex items-center justify-center  rounded-full bg-slate-900 p-2 hover:bg-slate-700 hover:transition-colors hover:duration-1000"
    >
      <Icon
        icon={props.icon}
        classes={`text-4xl  ${props.iconClasses || ''}`}
      />
    </a>
  )
}

export default SocialMediaIcon
