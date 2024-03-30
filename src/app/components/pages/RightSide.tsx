import React from 'react'
import { Title } from '../atoms'
import { SocialMedia } from '../organisms'

const RightSide = () => {
  return (
    <>
      <section className="flex flex-col items-center bg-white p-2 gap-2 ">
        <Title title='Links' />
        <SocialMedia />
      </section>
    </>

  )
}

export default RightSide