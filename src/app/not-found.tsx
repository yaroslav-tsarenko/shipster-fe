import { metadataByRoute, defaultMetadata } from "@/resources/metadata";
import NotFoundComponent from "@/components/not-found/NotFound";

export const metadata = metadataByRoute["/not-found"] || defaultMetadata;

export default function NotFound() {
    return (
        <NotFoundComponent/>
    );
}