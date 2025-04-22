import { ReactElement } from 'react'


interface IPageWrapperProps{
    className?:string,
    children:ReactElement
}
function PageWrapper({ children }:IPageWrapperProps) {
    return (
        <div className='pt-20 px-8 md:px-16 lg:px-36 bg-background'>{children}</div>
    )
}

export default PageWrapper