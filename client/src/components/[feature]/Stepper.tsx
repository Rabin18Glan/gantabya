
import { Progress } from '@radix-ui/react-progress'
import React from 'react'
import { Button } from '../ui/button'


interface StepperProps{
  stepTitle:string,
    type?:['horzontal'|'vertical'],
    stepCount:number,
    currentStepIndex:number,


}
function Stepper({stepCount,currentStepIndex,stepTitle}:StepperProps) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='font-bold text-xl'>{stepTitle}</h1>
      
    <div className='flex justify-center items-center'>
      
      {Array.from({ length: stepCount }).map((_, index) => (
      <>
        <Progress
          key={`progress-${index}`}
          className={`h-0.5 ${currentStepIndex == index ? 'w-[80vw] bg-black' : 'w-[2vw]'}`}
          value={currentStepIndex > index ? 100 : 0}
        />
        <Button
          key={`button-${index}`}
          className='w-10 h-10 rounded-full'
          variant={currentStepIndex < index ? 'outline' : 'default'}
        >
          {index + 1}
        </Button>
      </>
    ))}
        </div>
    </div>
    

  )
}

export default Stepper