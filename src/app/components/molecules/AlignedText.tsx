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
    <div className="mb-1 mt-2 flex justify-between">
      <Text classes={leftTextClasses}>{props.leftText}</Text>
      <Text classes={rightTextClasses}>{props.rightText}</Text>
    </div>
  )
}

export default AlignedText
