import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import { NotifContext } from '../../context/notifContext';
import Button from '../Elements/Button';
import CheckBox from '../Elements/CheckBox';
import LabeledInput from '../Elements/LabeledInput';
import CustomizedSnackbars from '../Elements/SnackBar';

const FormSignIn = () => {
  const { msg, setMsg, open, setOpen, isLoading, setIsLoading } = useContext(NotifContext);
  const { setIsLoggedIn, setName } = useContext(AuthContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange' });

  const onErrors = (errors) => console.error(errors);

  const onFormSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        'https://jwt-auth-eight-neon.vercel.app/login',
        {
          email: data.email,
          password: data.password,
        }
      );

      setOpen(true);
      setMsg({ severity: 'success', desc: 'Login Success' });

      setIsLoggedIn(true);
      localStorage.setItem('refreshToken', response.data.refreshToken);

      const decoded = jwtDecode(response.data.refreshToken);
      setName(decoded.name);

      console.log(decoded);

      navigate('/');
    } catch (error) {
      if (error.response) {
        setOpen(true);
        setMsg({ severity: 'error', desc: error.response.data.msg });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isLoading && <div className="loading-spinner">Loading...</div>}
      <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
        <div className="mb-6">
          <LabeledInput
            label="Email Address"
            type="email"
            placeholder="hello@example.com"
            name="email"
            register={{
              ...register('email', {
                required: 'Email address is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9._%+-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address format',
                },
              }),
            }}
          />
          {errors?.email && (
            <div className="text-center text-red-500">
              {errors.email.message}
            </div>
          )}
        </div>
        <div className="mb-6">
          <LabeledInput
            label="Password"
            type="password"
            placeholder="*************"
            name="password"
            register={{
              ...register('password', { required: 'Password is required' }),
            }}
          />
          {errors?.password && (
            <div className="text-center text-red-500">
              {errors.password.message}
            </div>
          )}
        </div>
        <div className="mb-6">
          <CheckBox label="Keep me signed in" name="status" />
        </div>
        <Button
          variant={`${!isValid ? "bg-gray-05" : "bg-primary zoom-in"} 
                  w-full text-white`}
          type="submit"
          disabled={!isValid ? "disabled" : ""}
        >
          Login
        </Button>
        {msg && (
          <CustomizedSnackbars
            severity={msg.severity}
            message={msg.desc}
            open={open}
            setOpen={setOpen}
          />
        )}
      </form>
    </div>
  );
};

export default FormSignIn;