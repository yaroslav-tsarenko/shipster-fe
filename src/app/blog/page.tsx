import React from 'react';
import {defaultMetadata, metadataByRoute} from "@/resources/metadata";

export const metadata = metadataByRoute["/blog"] || defaultMetadata;

const Page = () => {
    return (
        <div>
            
        </div>
    );
};

export default Page;