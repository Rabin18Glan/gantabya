import { LoginForm, LoginHero } from '../../features/authentication'

function Login() {
  return (
    <div className="">
      <LoginForm />
      <LoginHero  className='hidden'/>
    </div>
  )
}

export default Login