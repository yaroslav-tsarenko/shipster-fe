import React from "react";
import PageRenderer from "@/constructor/page-render/PageRender";
import type { Metadata } from "next";
import { metadataFromSchema } from "@/utils/fromSchema";
import cookiePolicySchema from "@/schemas/cookie-policy/cookiePolicy";

export async function generateMetadata(): Promise<Metadata> {
    return metadataFromSchema(cookiePolicySchema.meta);
}

export default function Page() {
    return <PageRenderer schema={cookiePolicySchema} />;
}
