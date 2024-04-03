import React from 'react'

type DurationTextProps = {
  initial: string
  final: string
}

const DurationText = (props: DurationTextProps) => {
  return (
    <div className='ml-4 items-center bg-slate-900 w-32 h-4 border-none rounded-sm text-center transition-all duration-500 hover:scale-125'>
      <p className='text-xs text-white'>{props.initial} - {props.final}</p>
    </div>
  )
}

export default DurationText