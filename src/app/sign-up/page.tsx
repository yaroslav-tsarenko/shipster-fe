import SignUp from '@/components/sign-up/SignUp';
import React from 'react';
import {defaultMetadata, metadataByRoute} from "@/resources/metadata";

export const metadata = metadataByRoute["/sign-up"] || defaultMetadata;
const Page = () => {
    return (
        <SignUp/>
    );
};

export default Page;