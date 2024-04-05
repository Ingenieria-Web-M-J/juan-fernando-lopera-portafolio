import React from 'react'
import { KnowledgeCard } from '../../molecules'
import { Title } from '../../atoms'

// Este componente se creó con la finalidad de ser usado en la sección de conocimientos.
// Se hace uso del componente "KnowledgeCard" y del átomo "Title".
// Se muestra un título y tres tarjetas de conocimiento.

const Knowledge = () => {
  return (
    <div className="w-full text-center">
      <Title title="Knowledge" size="text-3xl" classes="text-white" />
      <div className="grid w-full grid-cols-1 gap-5 p-5 lg:grid-cols-3">
        <KnowledgeCard
          icon="icon-[mdi--server]"
          title="Backend"
          text="API Development, Server-side"
        />
        <KnowledgeCard
          icon="icon-[mdi--database]"
          title="Databases"
          text="SQL, Data Modeling"
        />
        <KnowledgeCard
          icon="icon-[mdi--git]"
          title="Good Practices"
          text="Version control, SOLID Patterns, CI/CD"
        />
      </div>
    </div>
  )
}

export default Knowledge
