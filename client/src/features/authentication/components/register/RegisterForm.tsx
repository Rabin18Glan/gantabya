import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import { RegisterFormFields, registerSchema } from "@/schemas/registerSchema";

import Stepper from "@/components/[feature]/Stepper";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { REGISTER_API_URL } from "@/const/apiRoutes";
import { useToast } from "@/hooks/use-toast";
import SectionWrapper from "@/layouts/wrappers/SectionWrapper";
import { postApiService } from "@/services/postApiService";
import { IResponseUserData } from "@/types/auth";
import { BiArrowBack } from 'react-icons/bi';
import { INITIAL_DATA, REGISTER_FORM_STEPS } from "../../const/registerFormData";
import { useMultistepForm } from "../../hooks/useMultistepForm";



const RegisterForm = () => {

  // Form methods from react-hook-form
  const {toast} = useToast();

  const methods = useForm<RegisterFormFields>({
    resolver: zodResolver(registerSchema),

    defaultValues: INITIAL_DATA,
  });

  const { formState: { isSubmitting,errors },getValues, handleSubmit,setError} = methods;

  const { step, back, currentStepIndex, isSecondLastStep, isFirstStep, isLastStep, next, stepCount } = useMultistepForm(REGISTER_FORM_STEPS, methods.trigger);
const IsErrorOccurred = errors.root?.message!==undefined;


  const handleRetrySubmit=()=>{
handleFormSubmit(getValues());
  }
  const handleFormSubmit: SubmitHandler<RegisterFormFields> = async (data) => {
    try {
      const responseData = await postApiService<RegisterFormFields, IResponseUserData>(
        data,
        REGISTER_API_URL
      );
  
      if (responseData.success) {
        toast({
          variant: "default",
          title: "Successful",
          description: "Check your inbox and verify your email.",
          action: <ToastAction altText="Okay">Okay</ToastAction>,
        });
        next();
      } else {
        toast({
          variant: "destructive",
          title: "Submission failed",
          description: responseData?.message || "An unknown error occurred.",
          action: <ToastAction altText="Retry">Retry</ToastAction>,
        });
      }
    } catch (error: any) {
      // Handle structured errors from postApiService
      setError("root", {
        message: error.message,
      });
  
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.message || "An unexpected error occurred.",
        action: (
          <ToastAction onClick={() => handleFormSubmit(data)} altText="Retry">
            Try again
          </ToastAction>
        ),
      });
  
      console.error("Error details:", error.details); // Log details for debugging
    }
  };
  

  return (
    <FormProvider {...methods}>

      <SectionWrapper>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(handleFormSubmit)}
        >
          {step.form}
          <div>
            <Stepper isErrorOccured={IsErrorOccurred} currentStepIndex={currentStepIndex} stepTitle={step.title} steps={REGISTER_FORM_STEPS} />
            <div className={`flex mt-4 ${isFirstStep && 'justify-end'} ${!isFirstStep && ' justify-between'} `}>
              {(!isFirstStep && !isLastStep) && <Button type="button" variant={'outline'} className="hover:bg-destructive" onClick={back}>Back</Button>}
              {/* {IsErrorOccurred&&<p className="text-destructive">{errors.root?.message}</p>} */}
              {(!isLastStep && !isSecondLastStep) && <Button type="button" className="hover:bg-primary" onClick={next} variant={'outline'} >Next</Button>}
              {(isSecondLastStep) && <Button disabled={isSubmitting} className={`${IsErrorOccurred&&'bg-destructive'}`} type="submit">
              {IsErrorOccurred&&'RE'}
                {isSubmitting && 'Submitting'}
                {!isSubmitting && 'SUBMIT'}
               
              </Button>}

            </div>
          </div>

        </form>

        <a href="/login" className='mt-10 w-max hover:text-accent-foreground hover:bg-secondary shadow-lg text-destructive border-destructive hover:-translate-y-2 duration-300 hover:border-secondary border p-2 rounded-lg flex items-center gap-2' >
          <BiArrowBack /> I have a account</a>

      </SectionWrapper>
    </FormProvider>
  );
};

export default RegisterForm;
