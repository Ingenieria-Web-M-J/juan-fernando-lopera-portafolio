import React from 'react'

type PercentageBarProps = {
  percentage: number
}

const PercentageBar = (props: PercentageBarProps) => {
  return (
    <div className="bg-white border-double border-4 border-blue-700 rounded">
      <div className=" h-0.5 bg-blue-700 border-none rounded" style={{ width: `${props.percentage}%` }}></div>
    </div>
  )
}

export default PercentageBar
