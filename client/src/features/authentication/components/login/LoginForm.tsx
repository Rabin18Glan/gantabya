import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod';

import axios from 'axios';
import InputField from '../../../../components/InputField';
import MyButton from '../../../../components/MyButton';

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})
type FormFields = z.infer<typeof schema>;

function LoginForm() {
    
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm<FormFields>(
        {
            defaultValues: {
                email: ""
            },
            resolver: zodResolver(schema)
        }
    )

    const onSubmit: SubmitHandler<FormFields> = async (data) => {


        try {

            const response = await axios.post('http://127.0.0.1:8000/api/login', data,
                {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type, Authorization'

                    }
                }
            );

           
         


        } catch (err) {

            setError("root", {
                message: `${err}`
            })


        }
    }
  return (
    <form className="w-1/2 px-10  bg-blue-500 h-lvh py-40 self-center flex flex-col gap-3 items-center" action="" onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-black text-3xl font-semibold'>Login</h1>
                <InputField type="email"
                    placeholder="Email"
                    register={register('email', { required: 'Email is required' })}
                    error={errors.email?.message} />
                <InputField type="password" placeholder='Password'
                    register={register('password')}
                    error={errors.password?.message} />
                <MyButton disabled={isSubmitting} className='' type='submit'>
                    {isSubmitting ? "Loading" : "Login"}</MyButton>
                {errors.root && <div className='text-red-500'>{errors.root.message}</div>}
                <div>or</div>
                <button onClick={()=>{
                    
                }} className='font-semibold text-customBlue'>Register New</button>
            </form>
  )
}

export default LoginForm