'use client'
import React from 'react'
import { Button, Image } from '../../atoms'

const contactMeOnClick = () => {
  window.open('mailto:juanlopera0509@gmail.com', '_blank')
}

const MainInfo = () => {
  return (
    <main className="mx-2 my-2 flex flex-col justify-center rounded bg-white shadow-lg shadow-white/40 lg:mx-5 lg:flex-row">
      <section className="my-auto flex w-fit flex-col items-center p-2">
        <div className="text-center text-4xl">
          <p className="font-semibold ">I&apos;m Juan Fernando</p>
          <p className="font-bold text-slate-700">Backend</p>
          <p className="font-semibold ">Developer</p>
        </div>
        <p className=" my-5 w-fit text-justify ">
          Young innovator, with a high level of commitment and interpersonal
          skills to collaborate effectively in team environments, possessing
          expertise in programming languages and a strong passion for web
          development.
        </p>
        <Button
          text="CONTACT ME ➤"
          size="w-36"
          classes="hover:transition-colors hover:duration-500 hover:bg-slate-700"
          onClick={contactMeOnClick}
        />
      </section>
      <section className="flex w-fit items-end justify-center">
        <Image
          src="/img-rounded.png"
          alt="Juan Fernando Lopera Muñoz"
          classes="hidden lg:block"
        />
      </section>
    </main>
  )
}

export default MainInfo
