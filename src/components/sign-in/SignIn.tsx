"use client"

import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomInput from '@/ui/custom-input/CustomInput';
import CustomButton from '@/ui/custom-button/CustomButton';
import FormWrapper from '../form-wrapper/FormWrapper';
import Grid from "@/constructor/grid/Grid";
import { newRequest } from "@/utils/newRequest";
import {useAlert} from "@/context/AlertContext";

const SignInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'At least 6 characters').required('Password is required'),
});

const initialValues = {
    email: '',
    password: '',
};

const SignIn = () => {
    const {showAlert} = useAlert();
    return (
        <FormWrapper title="Sign In" description="Enter your credentials to sign in.">
            <Formik
                initialValues={initialValues}
                validationSchema={SignInSchema}
                onSubmit={async (values, { setSubmitting }) => {
                    setSubmitting(true);
                    try {
                        const { data, status } = await newRequest.post("/auth/login", values);
                        if (status === 200) {
                            showAlert("Success!", "Login is successful", "success");
                            const to = data?.redirectUrl || "/dashboard";
                            window.location.href = to;
                        }
                    } catch (err: any) {
                        showAlert("Error", "Invalid credentials", "error");
                    } finally {
                        setSubmitting(false);
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Grid columns={1} gap="15px">
                            <CustomInput name="email" label="Email Address" placeholder="Email Address" type="email" />
                            <CustomInput name="password" label="Password" placeholder="Password" type="password" />
                            <CustomButton type="submit" sx={{ width: "100%" }} loading={isSubmitting} color="green">
                                Sign In
                            </CustomButton>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </FormWrapper>
    );
};

export default SignIn;