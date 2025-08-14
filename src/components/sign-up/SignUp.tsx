"use client"

import React, {useState} from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import CustomInput from '@/ui/custom-input/CustomInput';
import CustomButton from "@/ui/custom-button/CustomButton";
import {Checkbox, Tab, TabList, Tabs} from '@mui/joy';
import {useField} from 'formik';
import FormWrapper from '../form-wrapper/FormWrapper';
import Grid from "@/constructor/grid/Grid";
import Divider from '@/ui/divider/Divider';
import {BusinessType, TitleInfo} from "@/resources/types";

const B2CSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().matches(/^\+46\s\d{2}\s\d{3}\s\d{2}\s\d{2}$/, 'Format: +46 XX XXX XX XX').required('Phone number is required'),
    password: Yup.string().min(6, 'At least 6 characters').required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords do not match').required('Confirm password is required'),
    address: Yup.string().required('Address is required'),
    zip: Yup.string().matches(/^\d{5}$/, '5 digits required').required('Postal code is required'),
    city: Yup.string().required('City is required'),
    country: Yup.string().required('Country is required'),
    consent: Yup.boolean().oneOf([true], 'You must accept the terms'),
});

const B2BSchema = Yup.object().shape({
    companyName: Yup.string().required('Company name is required'),
    orgNumber: Yup.string().matches(/^\d{6}-\d{4}$/, 'Format: XXXXXX-XXXX').required('Organization number is required'),
    vatNumber: Yup.string().matches(/^SE\d{10}$/, 'Format: SE + 10 digits').required('VAT number is required'),
    contactName: Yup.string().required('Contact person name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    address: Yup.string().required('Address is required'),
    zip: Yup.string().matches(/^\d{5}$/, '5 digits required').required('Postal code is required'),
    city: Yup.string().required('City is required'),
    country: Yup.string().required('Country is required'),
    password: Yup.string().min(6, 'At least 6 characters').required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords do not match').required('Confirm password is required'),
    consent: Yup.boolean().oneOf([true], 'You must accept the terms'),
});

const initialB2C = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    address: '',
    zip: '',
    city: '',
    country: 'Sweden',
    consent: false,
};

const initialB2B = {
    companyName: '',
    orgNumber: '',
    vatNumber: '',
    contactName: '',
    email: '',
    phone: '',
    address: '',
    zip: '',
    city: '',
    country: 'Sweden',
    password: '',
    confirmPassword: '',
    consent: false,
};

const ConsentCheckbox = () => {
    const [field, meta] = useField({name: 'consent', type: 'checkbox'});
    return (
        <div style={{margin: '12px 0'}}>
            <Checkbox
                {...field}
                label="I accept GDPR and Terms & Conditions"
                checked={field.value}
                name="consent"
                color="primary"
            />
            {meta.touched && meta.error ? (
                <div style={{color: 'red', fontSize: '0.8em', marginTop: 4}}>{meta.error}</div>
            ) : null}
        </div>
    );
};


const SignUp = () => {
    const [type, setType] = useState<'b2c' | 'b2b'>('b2c');
    const schema = type === 'b2c' ? B2CSchema : B2BSchema;
    const initialValues = type === 'b2c' ? initialB2C : initialB2B;
    const getTitle = ({ business }: { business: BusinessType }): TitleInfo => {
        switch (business) {
            case 'b2c':
                return {
                    title: 'Sign Up - Individual',
                    description: 'Create your personal account to start using our services.'
                };
            case 'b2b':
                return {
                    title: 'Sign Up - Company',
                    description: 'Create a company account to manage your business logistics.'
                };
            default:
                return {
                    title: 'Sign Up',
                    description: ''
                };
        }
    };

    const titleInfo = getTitle({ business: type });

    return (
        <FormWrapper title={titleInfo.title} description={titleInfo.description}>
            <Tabs
                value={type}
                onChange={(_event, newValue) => setType(newValue as 'b2c' | 'b2b')}
                sx={{ width: "100%", marginBottom: "10px" }}
            >
                <TabList sx={{ display: "flex", width: "100%" }}>
                    <Tab value="b2c" sx={{ flex: 1 }}>B2C (Individual)</Tab>
                    <Tab value="b2b" sx={{ flex: 1 }}>B2B (Company)</Tab>
                </TabList>
            </Tabs>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values, {setSubmitting}) => {
                    setSubmitting(false);
                }}>
                {({isSubmitting}) => (
                    <Form>
                        {type === 'b2c' ? (
                            <Grid columns={2} gap="15px">
                                <CustomInput name="firstName" label="First Name" placeholder="First Name"/>
                                <CustomInput name="lastName" label="Last Name" placeholder="Last Name"/>
                                <CustomInput name="email" label="Email Address" placeholder="Email Address"
                                             type="email"/>
                                <CustomInput name="phone" label="Phone Number" placeholder="+46 XX XXX XX XX"/>
                                <CustomInput name="password" label="Password" placeholder="Password" type="password"/>
                                <CustomInput name="confirmPassword" label="Confirm Password"
                                             placeholder="Confirm Password" type="password"/>
                                <CustomInput name="address" label="Address" placeholder="Street, House"/>
                                <CustomInput name="zip" label="Postal Code" placeholder="Postal Code"/>
                                <CustomInput name="city" label="City" placeholder="City"/>
                                <CustomInput name="country" label="Country" placeholder="Country"/>
                            </Grid>
                        ) : (
                            <Grid columns={2} gap="15px" >
                                <CustomInput name="companyName" label="Company Name" placeholder="Company Name"/>
                                <CustomInput name="orgNumber" label="Organization Number" placeholder="XXXXXX-XXXX"/>
                                <CustomInput name="vatNumber" label="VAT Number" placeholder="SEXXXXXXXXXX"/>
                                <CustomInput name="contactName" label="Contact Person Name"
                                             placeholder="Contact Person Name"/>
                                <CustomInput name="email" label="Email Address" placeholder="Email Address"
                                             type="email"/>
                                <CustomInput name="phone" label="Phone Number" placeholder="Phone Number"/>
                                <CustomInput name="address" label="Address" placeholder="Legal Address"/>
                                <CustomInput name="zip" label="Postal Code" placeholder="Postal Code"/>
                                <CustomInput name="city" label="City" placeholder="City"/>
                                <CustomInput name="country" label="Country" placeholder="Country"/>
                                <CustomInput name="password" label="Password" placeholder="Password" type="password"/>
                                <CustomInput name="confirmPassword" label="Confirm Password"
                                             placeholder="Confirm Password" type="password"/>
                            </Grid>
                        )}
                        <ConsentCheckbox/>
                        <CustomButton type="submit" sx={{width: "100%"}} loading={isSubmitting} color="green">
                            Sign Up
                        </CustomButton>
                        <Divider title="Or"/>
                        <CustomButton type="submit" sx={{width: "100%"}} loading={isSubmitting} color="blue">
                            Sign In
                        </CustomButton>
                    </Form>
                )}
            </Formik>
        </FormWrapper>
    );
};

export default SignUp;