import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import InputField from '../components/InputField';
import MyButton from '../components/MyButton';
import { LoginForm,LoginHero } from '../features/authentication';


function Login() {
    return (
        <div className='h-lvh  w-full flex justify-between'>
            <LoginForm />
          <LoginHero />

        </div>
    )
}

export default Login