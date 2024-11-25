import { ReactNode } from 'react'


interface MultiStepFormWrapperProps
{
    title?:string,
    children:ReactNode,
  
}
function MultiStepFormWrapper({children,title}:MultiStepFormWrapperProps) {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center p-10'>
       {title && <h1 className='absolute top-10 text-4xl font-bold'>{title}</h1>}
        <div className='self-center'>
        {children}
        </div>
     
        </div>
  )
}

export default MultiStepFormWrapper