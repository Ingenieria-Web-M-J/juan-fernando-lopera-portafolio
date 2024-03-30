import React from 'react'
import { KnowledgeCard } from '../../molecules'
import { Title } from '../../atoms'

const Knowledge = () => {
    return (
        <>
            <Title title='Knowledge' size='text-3xl' classes='text-white'/>
            <div className="w-full grid grid-cols-3 p-5 gap-5">
                <KnowledgeCard icon='icon-[mdi--server]' title='Backend' text='API Development, Server-side' />
                <KnowledgeCard icon='icon-[mdi--database]' title='Databases' text='SQL, Data Modeling' />
                <KnowledgeCard icon='icon-[mdi--git]' title='Good Practices' text='Version control, SOLID Patterns, CI/CD' />
            </div>
        </>
    )
}

export default Knowledge