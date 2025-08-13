import React from 'react';
import SignIn from '@/components/sign-in/SignIn';
import {defaultMetadata, metadataByRoute} from "@/resources/metadata";

export const metadata = metadataByRoute["/sign-in"] || defaultMetadata;

const Page = () => {
    return (
        <>
         <SignIn/>
        </>
    );
};

export default Page;