
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IRegisterForm } from '@/features/authentication/const/registerFormData';
import { Progress } from '@radix-ui/react-progress';


interface StepperProps{
  stepTitle: string,
  type?: ['horzontal' | 'vertical'],
  isErrorOccured: boolean,
  currentStepIndex: number,
  steps:Array<IRegisterForm>;


}
function Stepper({ isErrorOccured, currentStepIndex, stepTitle,steps }: StepperProps) {
  return (
    <div className=' flex flex-col justify-center items-center'>
     
      <div className='flex justify-center items-center'>

        {steps.map((step, index) => {
          const isFirstIndex = index==0;
          const isCurrentIndex =currentStepIndex == index;
          const isCurrentIndexGreaterEqual = currentStepIndex >= index;
          const progressValue = isCurrentIndexGreaterEqual&&100||0;
          
          return (<>
            
            <TooltipProvider>
  <Tooltip>
    <TooltipTrigger className={`p-1 px-3 rounded-lg border ${isErrorOccured&&'border-destructive'} ${isCurrentIndexGreaterEqual&&'bg-primary text-primary-foreground border-slate-700'}`}>
              {!isFirstIndex&&index}
              {isFirstIndex&&'Start'}
           
      </TooltipTrigger>
    <TooltipContent >
      <p >{step.title}</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
<Progress
              key={`progress-${index}`}
              className={`h-1 ${isCurrentIndexGreaterEqual&&'bg-slate-700'} ${!isCurrentIndexGreaterEqual&&"bg-slate-300"}  ${isCurrentIndex&& 'w-[40vw] md:w-[50vw] lg:w-[70vw]'} ${!isCurrentIndex&& 'w-[2vw] '}`}
              value={progressValue}
            />
            
          </>)
})}
      </div>
    </div>


  )
}

export default Stepper