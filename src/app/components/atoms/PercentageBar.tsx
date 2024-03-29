import React from 'react'

type PercentageBarProps = {
  percentage: number
}

const PercentageBar = (props: PercentageBarProps) => {
  return (
  <div className="bg-white border-double border-4 border-lime-400 rounded">
    <div className=" h-1 bg-lime-400 border-none rounded" style={{ width: `${props.percentage}%` }}></div>
  </div>
  )
}

export default PercentageBar
