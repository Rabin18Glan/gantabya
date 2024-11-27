import { RegisterFormFields } from "@/schemas/registerSchema";
import { useState } from "react";
import { UseFormTrigger } from "react-hook-form";
import { IRegisterForm } from "../const/registerFormData";

export function useMultistepForm(steps:IRegisterForm[],trigger:UseFormTrigger<RegisterFormFields>)
{


    const [currentStepIndex,setCurrentStepIndex] = useState(0);




   async function next()
    {
        const output = await trigger(steps[currentStepIndex].fields, { shouldFocus: true });
    if (!output) {
      return;
    }
        setCurrentStepIndex((i)=>{
            if(i>=steps.length-1) return i
            return i+1

        })

    }

    function back()
    {
        setCurrentStepIndex((i)=>{
            if(i<=0) return i
            return i-1

        })
    }

    return {
     currentStepIndex,
     step:steps[currentStepIndex],
     next,
     back,
     isFirstStep:currentStepIndex==0,
     isLastStep:currentStepIndex==steps.length-1,
     stepCount:steps.length,
     isSecondLastStep:currentStepIndex==steps.length-2
    }
    
}
