import type { Metadata } from "next";
import PageRenderer from "@/constructor/page-render/PageRender";
import homeSchema from "@/schemas/home-page/homePage";
import { metadataFromSchema } from "@/utils/fromSchema";

export async function generateMetadata(): Promise<Metadata> {
    return await metadataFromSchema(homeSchema.meta);
}

export default function Page() {
    return <PageRenderer schema={homeSchema} />;
}
