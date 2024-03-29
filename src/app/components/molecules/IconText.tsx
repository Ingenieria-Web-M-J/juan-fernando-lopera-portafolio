import React from 'react'
import { Text, Icon } from '../atoms'

type IconTextProps = {
    icon: string
    iconClasses?: string
    text: string

}

const IconText = (props: IconTextProps) => {
    return (
        <>
            <div className='flex items-center '>
                <Icon icon={props.icon} classes={props.iconClasses} />
                <Text text={props.text} />
            </div>
        </>

    )
}

export default IconText