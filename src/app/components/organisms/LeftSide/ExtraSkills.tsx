import React from 'react'
import { HorizontalLine, Title } from '../../atoms'
import { IconText } from '../../molecules'

const ExtraSkills = () => {
    return (
        <>
            <Title title='Extra Skills' />
            <IconText icon='icon-[mdi--git]' text='Git' iconClasses='text-2xl text-slate-900' />
            <IconText icon='icon-[mdi--github]' text='Github' iconClasses='text-2xl text-slate-900' />
            <IconText icon='icon-[mdi--linux]' text='Linux' iconClasses='text-2xl text-slate-900' />
            <HorizontalLine />
        </>
    )
}

export default ExtraSkills