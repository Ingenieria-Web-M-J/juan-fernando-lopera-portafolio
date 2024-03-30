import React from 'react'
import { Button, Image } from '../../atoms'

const MainInfo = () => {
    return (
        <>
            <main className='flex gap justify-center bg-white gap-4 mx-4 my-2 rounded'>
                <section className='flex flex-col my-auto gap-4 '>
                    <div>
                        <p className="font-sans text-4xl font-semibold text-center">I'm Juan Fernando</p>
                        <p className="font-sans text-4xl font-bold text-center text-blue-500">Backend</p>
                        <p className="font-sans text-4xl font-semibold text-center">Developer</p>
                    </div>
                    <p className="font-sans text-sm text-justify w-96 ">
                    Young innovator, with a high level of commitment and interpersonal skills to collaborate effectively in team environments, possessing expertise in programming languages and a strong passion for web development.
                    </p>
                    <Button text='HIRE ME ➤' size='w-32' />

                </section>
                <section className='justify-end'>
                    <Image src='/img-rounded.png' alt='Juan Fernando Lopera Muñoz' classes='w-96 h-96' />
                </section>
            </main>
        </>
    )
}

export default MainInfo