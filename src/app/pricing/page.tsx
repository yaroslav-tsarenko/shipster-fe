import React from "react";
import PageRenderer from "@/constructor/page-render/PageRender";
import pricingSchema from "@/schemas/pricing/pricingPage";
import type {Metadata} from "next";
import {metadataFromSchema} from "@/utils/fromSchema";

export async function generateMetadata(): Promise<Metadata> {
    return await metadataFromSchema(pricingSchema.meta);
}

export default function Page() {
    return <PageRenderer schema={pricingSchema} />;
}
