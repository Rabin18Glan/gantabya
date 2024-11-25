//libraries
import { useCallback } from 'react';
import { SubmitHandler } from 'react-hook-form';

//global
import { InputField, MyButton } from '../../../../components/common';

//locals
import { useLoginForm } from '../../hooks/useLoginForm';
import { handleLoginSubmitData } from '../../services/loginService';
import { LoginFormFields } from '@/schemas/loginSchema';

function LoginForm() {
const {setError,errors,register,handleSubmit,isSubmitting} = useLoginForm();
const onSubmit: SubmitHandler<LoginFormFields> = useCallback(async (data) => {
        try {
           const response = await handleLoginSubmitData(data);
           
        } catch (err) {

            setError("root", {
                message: `${err}`
            })
        }
    },[isSubmitting]);
    
    return (
        <form className="px-10  bg-blue-500 h-lvh py-40 self-center flex flex-col gap-3 items-center" action="" onSubmit={handleSubmit(onSubmit)}>
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
            <button onClick={() => {

            }} className='font-semibold text-customBlue'>Register New</button>
        </form>
    )
}

export default LoginForm