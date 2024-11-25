import { RegisterFormFields, registerSchema } from "@/schemas/registerSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

export function useRegisterForm()
{

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormFields>(
        {
            defaultValues: {
                email: ""
            },
            resolver: zodResolver(registerSchema)
        }
    )

    return {register,handleSubmit,setError,errors,isSubmitting}
    
}