import { PageWrapper } from '@/layouts'
import RegisterForm from '../../features/authentication/components/register/RegisterForm'
import withAuth from '@/components/hoc/withAuth'

function Register() {
  return (
    <PageWrapper>
      <RegisterForm />
    </PageWrapper>
  )
}


const CheckRegister = withAuth(Register);
export default CheckRegister;