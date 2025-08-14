import React from "react";
import PageRenderer from "@/constructor/page-render/PageRender";
import type {Metadata} from "next";
import {metadataFromSchema} from "@/utils/fromSchema";
import userAgreementSchema from "@/schemas/user-agreement/userAgreementPage";

export async function generateMetadata(): Promise<Metadata> {
    return await metadataFromSchema(userAgreementSchema.meta);
}

export default function Page() {
    return <PageRenderer schema={userAgreementSchema} />;
}