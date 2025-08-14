import { PageSchema } from "@/constructor/page-render/types";

const servicesSchema: PageSchema = {
    meta: {
        title: "Dienstleistungen – ShipsterAI",
        description:
            "Routenoptimierung, Carrier-OS, Tracking & Kundenschnittstellen – alles aus einer Hand.",
        keywords: ["dienste", "routen", "carrier os", "tracking", "apIs"],
        canonical: "/services",
        ogImage: {
            title: "Dienstleistungen",
            description: "Alles, was moderne Logistik in der Schweiz braucht.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "section",
            left: {
                type: "text",
                title: "Routenoptimierung",
                description:
                    "Unsere KI minimiert Leerfahrten, bündelt Stopps und berechnet ETAs in Echtzeit. Ideal für LTL, FTL und Paletten.",
                bullets: ["Dynamische Touren", "ETA-Prognosen", "CO₂- und Kosten-Senkung"],
            },
            right: { type: "media", mediaType: "image", src: "image2", width: "100%", height: "380px", alt: "Routing" },
        },
        {
            type: "section",
            left: { type: "media", mediaType: "image", src: "image3", width: "100%", height: "380px", alt: "Carrier OS" },
            right: {
                type: "text",
                title: "Carrier OS",
                description:
                    "Ein schlankes Operating System für Disponenten und Fahrer: Aufträge, Status, Dokumente – alles an einem Ort.",
                bullets: ["Smart Load Vorschläge", "Mobile Fahrer-App", "Digitale POD & Dokumente"],
            },
        },
        {
            type: "grid",
            columns: 3,
            gap: "1.5rem",
            items: [
                {
                    block: {
                        type: "card",
                        image: "image4",
                        title: "Kunden-Portal",
                        description:
                            "Buchung, Status, Rechnungen – Self-Service für Shipper in Echtzeit.",
                        buttonLink: "/demo",
                        buttonText: "Portal ansehen",
                    },
                },
                {
                    block: {
                        type: "card",
                        image: "image1",
                        title: "APIs & Integrationen",
                        description:
                            "Offene Schnittstellen zu TMS/ERP, Webhooks, Export in CH-Formate.",
                        buttonLink: "/developers",
                        buttonText: "Docs",
                    },
                },
                {
                    block: {
                        type: "card",
                        image: "image3",
                        title: "SLA & Support",
                        description:
                            "Klare SLAs, 24/7-Monitoring und Onboarding durch unser Team.",
                        buttonLink: "/sla",
                        buttonText: "SLA lesen",
                    },
                },
            ],
        },
        {
            type: "section",
            align: "center",
            gap: "2rem",
            left: {
                type: "text",
                title: "Bereit für einen Piloten?",
                description:
                    "Wir setzen in wenigen Tagen eine produktive Umgebung auf – mit echten Frachten und echten Einsparungen.",
                bullets: ["Schnelles Onboarding", "Keine langen Bindungen", "Proof-of-Value in Wochen"],
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
            },
        },
        {
            type: "faq",
            items: [
                { question: "Welche Regionen deckt ihr ab?", answer: "Schweiz zuerst, DACH sukzessive im Ausbau." },
                { question: "On-Prem möglich?", answer: "In Sonderfällen ja, Standard ist Cloud in EU/CH." },
                { question: "Wie startet man?", answer: "Kontakt aufnehmen, Pilot definieren, Go-Live planen." },
            ],
        },
    ],
};

export default servicesSchema;
