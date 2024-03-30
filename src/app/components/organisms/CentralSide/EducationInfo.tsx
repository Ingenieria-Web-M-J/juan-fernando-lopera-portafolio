import React from 'react'
import { EducationCard } from '../../molecules'
import { HorizontalLine, Text, Title } from '../../atoms'

const EducationInfo = () => {
  return (
    <>
      <Title title='Education' size='text-3xl' classes='text-white' />
      <div className='mx-6 bg-white  border-solid rounded p-0.5 my-5'>
        <EducationCard title='University of Antioquia' text='Student' initial='Nov 2019' final='Present' educationType='Systems Engineering Degree' description='The Systems Engineering program follows a research-based pedagogical model focusing on three pillars: "being," "knowing," and "doing," and emphasizes problem-solving and competency development. It encompasses the study of science and technology elements for research, innovation, modeling, and managing physical or abstract systems.' />
        <HorizontalLine margin='my-0' />
        <EducationCard title='Programming Course' text='Student' initial='Nov 2021' final='Feb 2022' educationType='Django Course (120 Hours)' description="The course, conducted by the collaboration of Sapiencia, UT View, and Comfenalco, focused on teaching Python and the Django framework for creating modern web applications. I learned about Python fundamentals and explored Django's features like URL routing, views, templates, models, forms, and authentication." />
      </div>
    </>
  )
}

export default EducationInfo