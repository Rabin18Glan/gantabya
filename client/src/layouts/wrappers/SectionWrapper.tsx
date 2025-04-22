import { ReactElement, ReactNode } from 'react'

interface ISectionProps{
className?:string,
children:ReactNode
}

function SectionWrapper({ children }:ISectionProps) {
    return (
        <div className='h-[100vh]'>{children}</div>
    )
}

export default SectionWrapper