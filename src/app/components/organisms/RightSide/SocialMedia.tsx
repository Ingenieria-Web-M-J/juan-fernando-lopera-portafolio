import React from 'react'
import { SocialMediaIcon } from '../../molecules'

// Este organismo se creó con la finalidad de ser usado en la sección de redes sociales.
// Se hace uso del componente "SocialMediaIcon".

const SocialMedia = () => {
  return (
    <>
      <SocialMediaIcon
        icon="icon-[line-md--linkedin] text-white"
        link="https://www.linkedin.com/in/jl005/"
      />
      <SocialMediaIcon
        icon="icon-[line-md--github-loop] text-white"
        link="https://github.com/JL005"
      />
    </>
  )
}

export default SocialMedia
