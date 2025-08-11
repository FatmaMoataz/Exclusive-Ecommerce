import signup_img from '../../assets/images/signup.png';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import { NavLink, useNavigate } from 'react-router-dom';
import { useFormik} from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import SaveIcon from '@mui/icons-material/Save';
import FormInput from '../../components/FormInput/FormInput';

interface FormValues {
  fullName: string;
  email: string;
  password: string;
  rePassword: string;
}

export default function Signup() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const initialValues: FormValues = {
    fullName: '',
    email: '',
    password: '',
    rePassword: '',
  };

  async function callRegister(
    values: FormValues,
  ) {
    try {
      console.log('User data submitted:', values);
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
      navigate('/login');
    } catch (error) {
      setLoading(false);
      console.error('Mock submission failed:', error);
    }
  }

  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(3, 'Minimum length should be 3')
      .max(15, 'Maximum length is 15')
      .required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string()
      .matches(/^[A-Z][a-z0-9]{3,8}$/, 'Invalid password')
      .min(6, 'Minimum 6 characters')
      .required('Required'),
    rePassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Confirmed password should match password')
      .required('Required'),
  });

  const registerForm = useFormik<FormValues>({
    initialValues,
    validationSchema,
    onSubmit: callRegister,
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { sm: 'column', md: 'row' },
        padding: '2rem',
        alignItems: { sm: 'center', md: 'start' },
        rowGap: { sm: '5px' },
        justifyContent: 'center',
      }}
    >
      <Box>
        <img src={signup_img} alt="signup" width="80%" />
      </Box>

      <Box sx={{ marginTop: '5rem' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Create an account
        </Typography>
        <Typography sx={{ paddingBlock: '1rem' }}>
          Enter your details below
        </Typography>

        <Box component="form" onSubmit={registerForm.handleSubmit}>
          <FormInput
            label="Full Name"
            name="fullName"
            formik={registerForm}
/>

          <FormInput
            label="Email"
            type='email'
            name="email"
            formik={registerForm}
          />

          <FormInput
            label="Password"
            type="password"
            name="password"
            formik={registerForm}
          />

          <FormInput
            label="Confirm Password"
            type="password"
            name="rePassword"
            formik={registerForm}
          />

          {loading ? (
            <Button
              fullWidth
              disabled
              endIcon={<SaveIcon />}
              variant="outlined"
            >
              Loading
            </Button>
          ) : (
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ backgroundColor: '#DB4444', marginTop: '1rem' }}
            >
              Create Account
            </Button>
          )}

          <Button
            variant="contained"
            fullWidth
            sx={{
              border: '1px solid gray',
              backgroundColor: 'transparent',
              color: 'black',
              marginTop: '1rem',
            }}
          >
            <GoogleIcon fontSize="small" sx={{ marginRight: '5px' }} />
            Sign up with Google
          </Button>

          <Typography
            sx={{ paddingBlock: '1rem', textAlign: 'center', color: 'gray' }}
          >
            Already have an account?{' '}
            <NavLink
              to="/login"
              style={{ color: 'gray', fontWeight: '600' }}
            >
              Log in
            </NavLink>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
