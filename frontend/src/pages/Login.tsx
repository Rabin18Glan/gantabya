import { LoginForm, LoginHero } from '../features/authentication';


function Login() {
    return (
        <div className='h-lvh  w-full flex justify-between'>
            <LoginForm />
          <LoginHero />

        </div>
    )
}

export default Login