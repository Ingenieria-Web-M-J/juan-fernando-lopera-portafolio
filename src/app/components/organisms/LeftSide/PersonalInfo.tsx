import React from 'react'
import { HorizontalLine, Image, Text } from '../../atoms'
import { AlignedText } from '../../molecules'

const PersonalInfo = () => {
    return (
        <>
            <Image src='/img-rounded-bg.jpg' alt='Juan Fernando Lopera Muñoz' classes='rounded-full w-32 h-32 mx-auto' />
            <Text text='Juan Fernando' classes='text-center text-2xl font-bold' />
            <Text text='Lopera Muñoz' classes='text-center text-xl' />
            <Text text='Systems engineering student' classes='text-center italic' />
            <Text text='UdeA' classes='text-center italic' />
            <HorizontalLine />
            <AlignedText leftText='Age:' rightText='23' rightTextClasses='font-semibold text-lime-500' />
            <AlignedText leftText='Residence:' rightText='CO' />
            <AlignedText leftText='Freelance:' rightText='Not available' rightTextClasses='font-semibold text-red-500' />
            <AlignedText leftText='Address:' rightText='Medellín, Colombia' />
            <HorizontalLine />
        </>
    )
}

export default PersonalInfo