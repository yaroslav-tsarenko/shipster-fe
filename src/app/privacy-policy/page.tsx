import React from "react";
import PageRenderer from "@/constructor/page-render/PageRender";
import type { Metadata } from "next";
import { metadataFromSchema } from "@/utils/fromSchema";
import privacyPolicySchema from "@/schemas/privacy-policy/privacyPolicy";

export async function generateMetadata(): Promise<Metadata> {
    return metadataFromSchema(privacyPolicySchema.meta);
}

export default function Page() {
    return <PageRenderer schema={privacyPolicySchema} />;
}
