import React from "react";
import PageRenderer from "@/constructor/page-render/PageRender";
import type { Metadata } from "next";
import { metadataFromSchema } from "@/utils/fromSchema";
import termsSchema from "@/schemas/terms-and-conditions/termsAndConditions";

export async function generateMetadata(): Promise<Metadata> {
    return metadataFromSchema(termsSchema.meta);
}

export default function Page() {
    return <PageRenderer schema={termsSchema} />;
}
