import FormForgotPw from '../components/Fragments/FormForgotPw'
import AuthLayout from '../components/Layouts/AuthLayout'

const ForgotPasswordPage = () => {
  return (
    <AuthLayout type="forgot password">
      <FormForgotPw />
    </AuthLayout>
  )
}

export default ForgotPasswordPage