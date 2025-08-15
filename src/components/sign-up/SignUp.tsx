"use client"

import React, { useState } from 'react';
import { Formik, Form, useFormikContext } from 'formik';
import * as Yup from 'yup';
import CustomInput from '@/ui/custom-input/CustomInput';
import CustomButton from "@/ui/custom-button/CustomButton";
import { Checkbox } from '@mui/joy';
import { useField } from 'formik';
import FormWrapper from '../form-wrapper/FormWrapper';
import Grid from "@/constructor/grid/Grid";
import Divider from '@/ui/divider/Divider';
import { newRequest } from "@/utils/newRequest";
import { useAlert } from '@/context/AlertContext';
import {DASHBOARD_FRONTEND_URL, handleNav} from '@/resources/constants';

const B2BSchema = Yup.object().shape({
    companyName: Yup.string().required('Company name is required'),
    orgNumber: Yup.string()
        .required('Organization number is required')
        .test('org-format', 'Format: XXXXXX-XXXX', value =>
            /^\d{6}-\d{4}$/.test(value || '')
        ),
    vatNumber: Yup.string()
        .required('VAT number is required')
        .test('vat-format', 'Format: SE + 10 digits', value =>
            /^SE\d{10}$/.test(value || '')
        ),
    name: Yup.string().required('Name is required'),
    secondName: Yup.string().required('Second name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string()
        .required('Phone number is required')
        .test('phone-format', 'Format: +46XXXXXXXXX', value =>
            /^\+46\d{9}$/.test(value || '')
        ),
    address: Yup.string().required('Address is required'),
    zip: Yup.string().matches(/^\d{5}$/, '5 digits required').required('Postal code is required'),
    city: Yup.string().required('City is required'),
    country: Yup.string().required('Country is required'),
    password: Yup.string().min(6, 'At least 6 characters').required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords do not match').required('Confirm password is required'),
    consent: Yup.boolean().oneOf([true], 'You must accept the terms'),
});

const initialB2B = {
    companyName: '',
    orgNumber: '',
    vatNumber: 'SE',
    name: '',
    secondName: '',
    email: '',
    phone: '+46',
    address: '',
    zip: '',
    city: '',
    country: 'Sweden',
    password: '',
    confirmPassword: '',
    consent: false,
};

const ConsentCheckbox = () => {
    const [field, meta] = useField({ name: 'consent', type: 'checkbox' });
    return (
        <div style={{ margin: '12px 0' }}>
            <Checkbox
                {...field}
                label="I accept GDPR and Terms & Conditions"
                checked={field.value}
                name="consent"
                color="primary"
            />
            {meta.touched && meta.error ? (
                <div style={{ color: 'red', fontSize: '0.8em', marginTop: 4 }}>{meta.error}</div>
            ) : null}
        </div>
    );
};

const FormattedInputs = () => {
    const { values, setFieldValue } = useFormikContext<typeof initialB2B>();

    const handleVatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const digits = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
        setFieldValue('vatNumber', 'SE' + digits);
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const digits = e.target.value.replace(/[^0-9]/g, '').slice(0, 9);
        setFieldValue('phone', '+46' + digits);
    };

    const handleOrgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const digits = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
        let formatted = digits;
        if (digits.length > 6) {
            formatted = digits.slice(0, 6) + '-' + digits.slice(6);
        }
        setFieldValue('orgNumber', formatted);
    };

    return (
        <>
            <CustomInput name="companyName" label="Company Name" placeholder="Company Name" />
            <Grid columns={2} gap="15px">
                <CustomInput name="name" label="Name" placeholder="Name" />
                <CustomInput name="secondName" label="Second Name" placeholder="Second Name" />
            </Grid>
            <Grid columns={2} gap="15px">
                <CustomInput
                    name="orgNumber"
                    label="Organization Number"
                    placeholder="XXXXXX-XXXX"
                    value={values.orgNumber}
                    onChange={handleOrgChange}
                />
                <CustomInput
                    name="vatNumber"
                    label="VAT Number"
                    placeholder="SEXXXXXXXXXX"
                    value={values.vatNumber}
                    onChange={handleVatChange}
                />
            </Grid>
            <Grid columns={2} gap="15px">
                <CustomInput name="email" label="Email Address" placeholder="Email Address" type="email" />
                <CustomInput
                    name="phone"
                    label="Phone Number"
                    placeholder="+46XXXXXXXXX"
                    value={values.phone}
                    onChange={handlePhoneChange}
                />
            </Grid>
            <Grid columns={2} gap="15px">
                <CustomInput name="address" label="Address" placeholder="Legal Address" />
                <CustomInput name="zip" label="Postal Code" placeholder="Postal Code" />
            </Grid>
            <Grid columns={2} gap="15px">
                <CustomInput name="city" label="City" placeholder="City" />
                <CustomInput name="country" label="Country" placeholder="Country" />
            </Grid>
            <Grid columns={2} gap="15px">
                <CustomInput name="password" label="Password" placeholder="Password" type="password" />
                <CustomInput name="confirmPassword" label="Confirm Password" placeholder="Confirm Password" type="password" />
            </Grid>
        </>
    );
};

const SignUp = () => {
    const [loading, setLoading] = useState(false);
    const { showAlert } = useAlert();

    async function handleRegister(
        values: Record<string, unknown>,
        setSubmitting: (isSubmitting: boolean) => void
    ) {
        setLoading(true);
        try {
            const payload = {
                companyName: values.companyName,
                orgNumber: values.orgNumber,
                vatNumber: values.vatNumber,
                name: values.name,
                secondName: values.secondName,
                email: values.email,
                phone: values.phone,
                address: values.address,
                zip: values.zip,
                city: values.city,
                country: values.country,
                password: values.password,
                role: 'customer',
            };
            await newRequest.post('/auth/register', payload);
            showAlert('Success!', 'Your action was successful.', 'success');
            setTimeout(() => {
                handleNav(DASHBOARD_FRONTEND_URL ?? '/dashboard');
            }, 1000);
        } catch (err) {
            console.error(err);
            showAlert('Error', 'Registration failed. Please try again.', 'error');
        } finally {
            setSubmitting(false);
            setLoading(false);
        }
    }

    return (
        <FormWrapper title="Sign Up - Company" description="Create a company account to manage your business logistics.">
            <Formik
                initialValues={initialB2B}
                validationSchema={B2BSchema}
                onSubmit={async (values, { setSubmitting }) => {
                    await handleRegister(values, setSubmitting);
                }}>
                {() => (
                    <Form>
                        <Grid columns={1} gap="5px">
                            <FormattedInputs />
                        </Grid>
                        <ConsentCheckbox />
                        <CustomButton type="submit" sx={{ width: "100%" }} loading={loading} color="green">
                            Sign Up
                        </CustomButton>
                        <Divider title="Or" />
                        <CustomButton onClick={() => handleNav("/sign-in")} sx={{ width: "100%" }} color="blue">
                            Sign In
                        </CustomButton>
                    </Form>
                )}
            </Formik>
        </FormWrapper>
    );
};

export default SignUp;