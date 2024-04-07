'use client'
import React from 'react'
import { Button, Image } from '../../atoms'
import { PopUp } from '../../molecules'
import { useState } from "react";

const contactMeOnClick = () => {
  window.open('mailto:juanlopera0509@gmail.com', '_blank')
}

// Este organismo se creó con la finalidad de ser usado en la página principal de la aplicación.
// Contiene información personal y una imagen de perfil.
// Se hace uso del átomo "Button" y "Image".
// Se creó un botón que al hacer clic en él, se abre el cliente de correo predeterminado del 
// usuario para enviar un correo electrónico a mi dirección de correo electrónico.
const MainInfo = () => {

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

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
          text="HIRE ME ➤"
          size="w-36"
          classes="hover:transition-colors hover:duration-500 hover:bg-slate-700"
          onClick={() => {
            setOpen(o => !o);
          }}
        />
        <PopUp open={open} closeModal={closeModal} text="My passion lies in backend development and cloud technologies. I thrive on creating efficient, 
          scalable systems and enjoy staying updated with the latest trends. Alongside my technical skills, 
          I bring strong soft skills like teamwork, resilience, and self-driven learning, which contribute to 
          my success in collaborative environments." >
          <div className="flex justify-center py-4">
            <Button
              text="CONTACT ME ➤"
              size="w-36"
              classes="hover:transition-colors hover:duration-500 hover:bg-slate-700 shadow-md shadow-white/40" onClick={contactMeOnClick}
            />
          </div>
        </PopUp>

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

// {contactMeOnClick}