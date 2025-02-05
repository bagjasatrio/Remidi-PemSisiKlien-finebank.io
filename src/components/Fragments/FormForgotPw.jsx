import LabeledInput from '../Elements/LabeledInput'
import Button from '../Elements/Button'
import { Link } from 'react-router-dom'

const FormForgotPw = () => {
  return (
			<form action="">
        <h2 className="text-center text-xl text-defaultBlack font-bold mb-4">Forgot Password?</h2>
        <p className="text-center text-gray-01 mb-8">
          Enter your email address to get the password reset link.
        </p>
			  <div className="mb-6">
				<LabeledInput
                label="Email Address"
                type="email"
                placeholder="hello@example.com"
                name="email"
                />
			  </div>
			  <Button variant="bg-primary w-full font-semibold text-white" type="submit">
            Password Reset
        </Button>
        <div className="mt-6 text-center">
          <Link to="/login" className="text-gray-02 text-sm font-semibold">Back to login</Link>
        </div>
			</form>
  )
}

export default FormForgotPw