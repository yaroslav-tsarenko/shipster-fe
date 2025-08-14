import React from "react";
import PageRenderer from "@/constructor/page-render/PageRender";
import contactSchema from "@/schemas/contact/contactPage";
import type {Metadata} from "next";
import {metadataFromSchema} from "@/utils/fromSchema";

export async function generateMetadata(): Promise<Metadata> {
    return await metadataFromSchema(contactSchema.meta);
}

export default function Page() {
    return <PageRenderer schema={contactSchema} />;
}
