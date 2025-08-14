import type { Metadata } from "next";
import PageRenderer from "@/constructor/page-render/PageRender";
import { metadataFromSchema } from "@/utils/fromSchema";
import aboutSchema from "@/schemas/about/aboutPage";

export async function generateMetadata(): Promise<Metadata> {
    return await metadataFromSchema(aboutSchema.meta);
}

export default function Page() {
    return <PageRenderer schema={aboutSchema} />;
}
