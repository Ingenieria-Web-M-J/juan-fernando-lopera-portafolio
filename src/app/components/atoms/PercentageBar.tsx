import React from 'react'

type PercentageBarProps = {
  percentage: number
}

const PercentageBar = (props: PercentageBarProps) => {
  return (
  <div className="bg-white border-double border-4 border-lime-500 rounded">
    <div className=" h-0.5 bg-lime-500 border-none rounded" style={{ width: `${props.percentage}%` }}></div>
  </div>
  )
}

export default PercentageBar
