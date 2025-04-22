import { PageWrapper } from '@/layouts'
import { LoginForm, LoginHero } from '../../features/authentication'
import withAuth from '@/components/hoc/withAuth'

function Login() {
  return (
 <PageWrapper>
  
     <div className="flex justify-center md:grid md:grid-cols-2 h-screen">
      <LoginForm />
      <LoginHero className='hidden md:block' />
    </div>
 </PageWrapper>
  )
}

const CheckedLogin = withAuth(Login)
export default CheckedLogin