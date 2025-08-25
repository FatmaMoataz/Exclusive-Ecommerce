import React from 'react';
import TextField from '@mui/material/TextField';

interface FormInputProps {
    label: string,
    name: string,
    type?: string,
    formik: any,
    disabled?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({label, name, type='text', formik, disabled=false}) => {
    return (
<TextField
fullWidth
name={name}
label={label}
type={type}
value={formik.values[name]}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
 sx={{ display: 'block', marginBottom: '1rem' }}
 variant="standard"
 error={formik.touched[name] && Boolean(formik.errors[name])}
 helperText={formik.touched[name] && formik.errors[name]}
 disabled={disabled}
/>
    )
}

export default FormInput