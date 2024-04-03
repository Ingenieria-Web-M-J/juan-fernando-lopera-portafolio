import React from 'react'
import { Title } from '../atoms'
import { SocialMedia } from '../organisms'

const RightSide = () => {
  return (
    <section className="flex lg:flex-col bg-white p-2 gap-2 flex-row justify-center items-center lg:justify-start  ">
      <Title title='Links' classes='hidden lg:block' />
      <SocialMedia />
    </section>
  )
}



export default RightSide