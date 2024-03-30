import React from 'react'

type HorizontalLineProps = {
  margin?: string
}

const HorizontalLine = (props: HorizontalLineProps) => {
  return (
    <hr className={`mx-auto w-10/12 h-px ${props.margin || 'my-4'}`} />
  )
}

export default HorizontalLine