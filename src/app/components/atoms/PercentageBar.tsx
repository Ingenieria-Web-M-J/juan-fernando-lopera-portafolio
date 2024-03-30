import React from 'react'

type PercentageBarProps = {
  percentage: number
}

const PercentageBar = (props: PercentageBarProps) => {
  return (
    <div className="bg-white border-double border-4 border-slate-900 rounded">
      <div className=" h-0.5 bg-slate-900 border-none rounded" style={{ width: `${props.percentage}%` }}></div>
    </div>
  )
}

export default PercentageBar
