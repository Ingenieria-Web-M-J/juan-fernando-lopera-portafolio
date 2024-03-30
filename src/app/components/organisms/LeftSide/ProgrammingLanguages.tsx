import React from 'react'
import { HorizontalLine, Title } from '../../atoms'
import { LanguageInfo } from '../../molecules'

const ProgrammingLanguages = () => {
    return (
        <>
            <Title title='Programming Languages' />
            <LanguageInfo language='Java' percentage={70} />
            <LanguageInfo language='Python' percentage={60} />
            <LanguageInfo language='Javascript' percentage={40} />
            <HorizontalLine/>
        </>
    )
}

export default ProgrammingLanguages