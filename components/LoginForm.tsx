import React, { FC } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {router} from "next/client";
import {useTranslation} from "next-i18next";
import Link from "next/link";

const validationSchemaLogin = yup.object({
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const LoginForm:FC = () => {
    const {i18n} = useTranslation("header");

    const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchemaLogin,
    onSubmit: (values) => {
      // Handle login form submission
      console.log('Login form submitted with values:', values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        variant="outlined"
        margin="normal"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        fullWidth
        id="password"
        name="password"
        label="Password"
        type="password"
        variant="outlined"
        margin="normal"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
        Login
      </Button>
      <Typography variant="body2" style={{ marginTop: '10px' }}>
        Don't have an account?{' '}
        <Link href="/register" locale={i18n.language}>
          Register here
        </Link>
      </Typography>
    </form>
  );
};

export default LoginForm;
