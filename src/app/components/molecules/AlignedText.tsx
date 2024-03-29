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
        <>
            <div className="flex justify-between my-2">
                <Text text={props.leftText} classes={leftTextClasses} />
                <Text text={props.rightText} classes={rightTextClasses} />
            </div>
        </>
    )
}

export default AlignedText