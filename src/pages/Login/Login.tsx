import { useState } from 'react';
import signup_img from '../../assets/images/signup.png';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import SaveIcon from '@mui/icons-material/Save';
import axios from 'axios';

interface LoginFormValues {
  username: string;
  password: string;
}

export default function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const initialValues: LoginFormValues = {
    username: '',
    password: '',
  };

  async function callLogin(values: LoginFormValues) {
    try {
      setLoading(true);
      const { data } = await axios.post(`https://fakestoreapi.com/auth/login`, values);
      console.log({ data });
      setLoading(false);
      navigate('/');
    } catch (error) {
      console.error("Login failed:", error);
      setLoading(false);
    }
  }

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Minimum length should be 3")
      .max(15, "Maximum length is 15")
      .required("Required"),
    password: Yup.string()
      .matches(new RegExp('^[A-Z][a-z0-9]{3,8}$'), 'Invalid password')
      .min(6, 'Minimum 6 characters')
      .required('Required'),
  });

  const loginForm = useFormik<LoginFormValues>({
    initialValues,
    validationSchema,
    onSubmit: callLogin,
  });

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: { sm: 'column', md: 'row' },
      padding: '2rem',
      alignItems: { sm: 'center', md: 'start' },
      rowGap: { sm: '5px' },
      justifyContent: 'center'
    }}>
      <Box>
        <img src={signup_img} alt="login" width={'80%'} />
      </Box>
      <Box sx={{ marginTop: '5rem' }}>
        <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
          Log in to Exclusive
        </Typography>
        <Typography sx={{ paddingBlock: '1rem' }}>
          Enter your details below
        </Typography>
        <Box component="form" onSubmit={loginForm.handleSubmit}>
          <TextField
            fullWidth
            label="Username"
            name="username"
            value={loginForm.values.username}
            onChange={loginForm.handleChange}
            onBlur={loginForm.handleBlur}
            error={loginForm.touched.username && Boolean(loginForm.errors.username)}
            helperText={loginForm.touched.username && loginForm.errors.username}
            variant="standard"
            sx={{ display: 'block', marginBottom: '1rem' }}
          />
          <TextField
            fullWidth
            label="Password"
            type='password'
            name='password'
            value={loginForm.values.password}
            onChange={loginForm.handleChange}
            onBlur={loginForm.handleBlur}
            error={loginForm.touched.password && Boolean(loginForm.errors.password)}
            helperText={loginForm.touched.password && loginForm.errors.password}
            variant="standard"
            sx={{ display: 'block', marginBottom: '1rem' }}
          />

          {
            loading ? (
              <Button
                disabled
                endIcon={<SaveIcon />}
                variant="outlined"
              >
                Loading
              </Button>
            ) : (
              <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: { sm: 'column-reverse', md: 'row' },
                alignItems: 'center'
              }}>
                <Button type='submit' variant="contained" sx={{ backgroundColor: '#DB4444', marginTop: '1rem' }}>
                  Log in
                </Button>
                <NavLink to="/forgot-password" style={{ color: '#DB4444', textDecoration: 'none' }}>
                  Forget Password?
                </NavLink>
              </Box>
            )
          }
        </Box>
      </Box>
    </Box>
  );
}
