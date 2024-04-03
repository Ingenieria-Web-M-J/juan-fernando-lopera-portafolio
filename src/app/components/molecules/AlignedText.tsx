import React from 'react'

import { Text } from '../atoms'

type AlignedTextProps = {
    leftText: string
    leftTextClasses?: string
    rightText: string
    rightTextClasses?: string

}

const AlignedText = (props: AlignedTextProps) => {
    const rightTextClasses = `text-right ${props.rightTextClasses || ''}`
    const leftTextClasses = `text-left ${props.leftTextClasses || ''}`
    return (
        <div className="flex justify-between mt-2 mb-1">
            <Text classes={leftTextClasses} >{props.leftText}</Text>
            <Text classes={rightTextClasses} >{props.rightText}</Text>
        </div>
    )
}

export default AlignedText