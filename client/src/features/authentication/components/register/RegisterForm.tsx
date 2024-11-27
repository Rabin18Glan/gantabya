import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import { RegisterFormFields, registerSchema } from "@/schemas/registerSchema";

import Stepper from "@/components/[feature]/Stepper";
import { Button } from "@/components/ui/button";
import { REGISTER_API_URL } from "@/const/apiRoutes";
import { postApiService } from "@/services/postApiService";
import { INITIAL_DATA, REGISTER_FORM_STEPS } from "../../const/registerFormData";
import { useMultistepForm } from "../../hooks/useMultistepForm";
import { useNavigate } from "react-router-dom";

interface IResponseData{
  success:boolean
}

const RegisterForm = () => {

  // Form methods from react-hook-form

  const methods = useForm<RegisterFormFields>({
    resolver: zodResolver(registerSchema),

    defaultValues: INITIAL_DATA,
  });

  

  const { step, back, currentStepIndex,isSecondLastStep, isFirstStep, isLastStep, next,stepCount } = useMultistepForm(REGISTER_FORM_STEPS, methods.trigger);

const handleFormSubmit:SubmitHandler<RegisterFormFields> =async (data)=>{
const responseData =await postApiService<RegisterFormFields,IResponseData>(data,REGISTER_API_URL);

if(responseData.success)
{
  next();
}
}

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleFormSubmit)}
      >
        {step.form}
        <div className='w-screen absolute px-10 bottom-20 left-0 '>

            <Stepper currentStepIndex={currentStepIndex} stepCount={stepCount} stepTitle={step.title}  />
          <div className='flex justify-center mt-4 gap-5 '>
            {(!isFirstStep&&!isLastStep) && <Button type="button" onClick={back}>Back</Button>}
            {(!isLastStep&&!isSecondLastStep) && <Button type="button" onClick={next} variant={'outline'} >Next</Button>}
            {(isSecondLastStep) && <Button type="submit">Submit</Button>}
 
          </div>
        </div>

      </form>



    </FormProvider>
  );
};

export default RegisterForm;
