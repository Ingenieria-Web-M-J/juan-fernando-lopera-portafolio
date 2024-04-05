import React from 'react'

type DurationTextProps = {
  initial: string
  final: string
}

const DurationText = (props: DurationTextProps) => {
  return (
    <div className="ml-4 h-4 w-32 items-center rounded-sm border-none bg-slate-900 text-center transition-all duration-500 hover:scale-125">
      <p className="text-xs text-white">
        {props.initial} - {props.final}
      </p>
    </div>
  )
}

export default DurationText
