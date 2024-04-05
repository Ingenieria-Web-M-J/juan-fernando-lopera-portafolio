import React from 'react'
import { Text, Icon } from '../atoms'

type IconTextProps = {
  icon: string
  iconClasses?: string
  text: string
}

const IconText = (props: IconTextProps) => {
  return (
    <div className="my-1 flex items-center">
      <Icon icon={props.icon} classes={`${props.iconClasses} ml-4 mr-2`} />
      <Text>{props.text}</Text>
    </div>
  )
}

export default IconText
