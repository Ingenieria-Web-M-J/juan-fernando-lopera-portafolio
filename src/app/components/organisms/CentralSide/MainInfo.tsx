import React from 'react'
import { Button, Image } from '../../atoms'

const MainInfo = () => {
    return (
        <main className='flex justify-center bg-white flex-col lg:flex-row lg:mx-5 my-2 mx-2 rounded shadow-lg shadow-white/40'>
            <section className='flex flex-col my-auto w-fit items-center p-2'>
                <div className="text-4xl text-center">
                    <p className="font-semibold ">I&apos;m Juan Fernando</p>
                    <p className="font-bold text-slate-700">Backend</p>
                    <p className="font-semibold ">Developer</p>
                </div>
                <p className=" text-justify w-fit my-5 ">
                    Young innovator, with a high level of commitment and interpersonal skills to collaborate effectively in team environments, possessing expertise in programming languages and a strong passion for web development.
                </p>
                <Button text='HIRE ME ➤' size='w-32' classes='hover:transition-colors hover:duration-500 hover:bg-slate-700' />

            </section>
            <section className='flex justify-center w-fit items-end'>
                <Image src='/img-rounded.png' alt='Juan Fernando Lopera Muñoz' classes='hidden lg:block' />
            </section>
        </main>
    )
}

export default MainInfo