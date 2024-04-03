import React from 'react'
import { Title } from '../../atoms'
import { PortfolioCard } from '../../molecules'

const PortfolioInfo = () => {
    return (
        <div className='w-full'>
            <Title title='Portfolio' size='text-3xl' classes='text-white' />
            <div className="w-full grid lg:grid-cols-2 grid-cols-1 p-5 gap-5">
                <PortfolioCard icon='icon-[line-md--chat-twotone]' title='VetApp Backend' text='An application designed to facilitate communication and coordination between farmers and veterinarians in the Antioquia region.' url='https://github.com/JL005/vetapp-backend' />
                <PortfolioCard icon='icon-[line-md--person-twotone]' title='User management' text='User management for the SSMU application ' url='https://github.com/xGoku07x/gestion-back' />
            </div>
        </div>
    )
}

export default PortfolioInfo