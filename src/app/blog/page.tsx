import React from "react";
import PageRenderer from "@/constructor/page-render/PageRender";
import blogSchema from "@/schemas/blog/blogPage";
import type {Metadata} from "next";
import {metadataFromSchema} from "@/utils/fromSchema";

export async function generateMetadata(): Promise<Metadata> {
    return await metadataFromSchema(blogSchema.meta);
}

export default function Page() {
    return <PageRenderer schema={blogSchema} />;
}
