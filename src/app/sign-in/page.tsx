import React from 'react';
import {metadataByRoute} from "@/resources/metadata";
import {Metadata} from "next";

export const metadata : Metadata = metadataByRoute["/sign-in"];

const Page = () => {
    return (
        <div>
            
        </div>
    );
};

export default Page;