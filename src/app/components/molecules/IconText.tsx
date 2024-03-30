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
            <div className='flex items-center my-1'>
                <Icon icon={props.icon} classes={`${props.iconClasses} ml-4 mr-2`} />
                <Text text={props.text} />
            </div>
        </>

    )
}

export default IconText