import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import PageWrapper from "@/components/page-wrapper/PageWrapper";
import {defaultMetadata} from "@/resources/metadata";
import CookiePolicy from "@/components/cookie-policy/CookiePolicy";

export const metadata = defaultMetadata;

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            <link
                href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
                rel="stylesheet"
            />
        </head>
        <body>
        <Header/>
        <CookiePolicy/>
        <PageWrapper>{children}</PageWrapper>
        <Footer/>
        </body>
        </html>
    );
}
