"use client"

import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomInput from '@/ui/custom-input/CustomInput';
import CustomButton from '@/ui/custom-button/CustomButton';
import FormWrapper from '../form-wrapper/FormWrapper';

const SignInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'At least 6 characters').required('Password is required'),
});

const initialValues = {
    email: '',
    password: '',
};

const SignIn = () => (
    <FormWrapper title="Sign In" description="Enter your credentials to sign in.">
        <Formik
            initialValues={initialValues}
            validationSchema={SignInSchema}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <CustomInput name="email" label="Email Address" placeholder="Email Address" type="email" />
                    <CustomInput name="password" label="Password" placeholder="Password" type="password" />
                    <CustomButton type="submit" sx={{ width: "100%" }} loading={isSubmitting} color="green">
                        Sign In
                    </CustomButton>
                </Form>
            )}
        </Formik>
    </FormWrapper>
);

export default SignIn;