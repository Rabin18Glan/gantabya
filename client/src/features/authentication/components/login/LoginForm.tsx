// Libraries
import { SubmitHandler } from 'react-hook-form';

// Global
import { InputField } from '../../../../components/common';

// Locals
import { Button } from '@/components/ui/button';
import { ToastAction } from '@/components/ui/toast';
import { LOGIN_API_URL } from '@/const/apiRoutes';
import { toast } from '@/hooks/use-toast';
import { LoginFormFields } from '@/schemas/loginSchema';
import { postApiService } from '@/services/postApiService';
import { useAppDispatch } from '@/store/hooks';
import { login } from '@/store/slices/authSlice';
import { IResponseUserData } from '@/types/auth';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginForm } from '../../hooks/useLoginForm';
import OAuthOptions from './OAuthOptions';

function LoginForm() {
    const { setError, errors, register, handleSubmit, isSubmitting } = useLoginForm();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleFormSubmit: SubmitHandler<LoginFormFields> = useCallback(async (data) => {
        try {
            const { token, userData, success, message } = await postApiService<LoginFormFields, IResponseUserData>(
                data,
                LOGIN_API_URL
            );

            if (success) {
               
                dispatch(login({ token, userData }));

                toast({
                    variant: "default",
                    title: "Login successful",
                    description: message,
                    action: <ToastAction altText="Okay">Okay</ToastAction>,
                });

                navigate('/travel');
            } else {
                toast({
                    variant: "destructive",
                    title: "Login failed",
                    description: message || "An unknown error occurred.",
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
        }
    }
,[isSubmitting]);

    return (
        <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="text-black text-3xl font-semibold">Log into your Account</h1>

            <form className="flex flex-col gap-3 items-center" onSubmit={handleSubmit(handleFormSubmit)}>
                <InputField
                    type="email"
                    id="email"
                    label="Enter Email"
                    placeholder="Email"
                    register={register('email', { required: 'Email is required' })}
                    error={errors.email?.message}
                />
                <InputField
                    id="password"
                    label="Enter Password"
                    type="password"
                    placeholder="Password"
                    register={register('password')}
                    error={errors.password?.message}
                />
                <Button disabled={isSubmitting} className="w-full h-10">
                    {isSubmitting&&"Loading"}
                    {!isSubmitting&& "Login"}
                </Button>
                {errors.root && <div className="text-red-500">{errors.root.message}</div>}
            </form>

            <p>or continue with</p>
           
<OAuthOptions />
            <hr />

            <a href="/register" className="font-bold hover:text-primary-dark hover:text-accent">
                Register New
            </a>
        </div>
    );
}

export default LoginForm;
