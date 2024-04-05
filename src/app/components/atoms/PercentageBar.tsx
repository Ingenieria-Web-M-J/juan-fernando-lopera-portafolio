import React from 'react'

type PercentageBarProps = {
  percentage: number
}

// Este átomo se creó con la finalidad de ser usado en todos los lugares donde se requiera mostrar una barra de porcentaje.
const PercentageBar = (props: PercentageBarProps) => {
  return (
    <div className="rounded border-4 border-double border-slate-900 bg-white">
      <div
        className=" h-0.5 rounded border-none bg-slate-900"
        style={{ width: `${props.percentage}%` }}
      ></div>
    </div>
  )
}

export default PercentageBar
