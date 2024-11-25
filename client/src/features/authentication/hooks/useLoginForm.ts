import { useForm } from "react-hook-form";
// import { LoginFormFields, loginSchema } from "../../../schemas/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormFields, loginSchema } from "@/schemas/loginSchema";



export function useLoginForm()
{

    
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormFields>(
        {
            defaultValues: {
                email: ""
            },
            resolver: zodResolver(loginSchema)
        }
    )

    return {register,handleSubmit,setError,errors,isSubmitting}
}