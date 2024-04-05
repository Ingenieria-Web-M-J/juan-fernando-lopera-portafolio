import React from 'react'

type HorizontalLineProps = {
  margin?: string
}

const HorizontalLine = (props: HorizontalLineProps) => {
  return <hr className={`mx-auto h-px w-10/12 ${props.margin || 'my-4'}`} />
}

export default HorizontalLine
