import { ReactNode } from 'react';
import { } from 'react-icons';

interface MultiStepFormWrapperProps
{
    title?:string,
    children:ReactNode,
  
}
function MultiStepFormWrapper({children,title}:MultiStepFormWrapperProps) {
  return (
    <div className='h-[60vh] w-full flex flex-col justify-center items-center gap-10 '>
     
       {title && <h1 className='text-2xl font-bold'>{title}</h1>}
        <div className='self-center'>
        {children}
        </div>
     
        </div>
  )
}

export default MultiStepFormWrapper