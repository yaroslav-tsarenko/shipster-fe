import { PageSchema } from "@/constructor/page-render/types";

const aboutSchema: PageSchema = {
    meta: {
        title: "Über ShipsterAI – Schweizer KI-Logistik",
        description:
            "Wir bauen die nächste Generation der Logistik in der Schweiz: präzise Routen, faire Preise, volle Transparenz.",
        keywords: ["logistik", "ki", "schweiz", "routenoptimierung", "frachten"],
        canonical: "/about",
        ogImage: {
            title: "Über ShipsterAI",
            description: "Schweizer Präzision trifft auf KI.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "media",
            mediaType: "image",
            src: "image1",
            width: "100%",
            height: "420px",
            alt: "Team ShipsterAI",
        },
        {
            type: "section",
            left: {
                type: "text",
                title: "Unsere Mission",
                description:
                    "Wir verbinden Verlader und Schweizer Carrier in Sekunden. Mit datengetriebener Planung, klaren SLA und operativer Exzellenz.",
                bullets: [
                    "Sekundenschnelle Zuordnung von Ladungen",
                    "Transparente ETA und Live-Tracking",
                    "Konsequent optimierte Kosten und Emissionen",
                ],
            },
            right: { type: "media", mediaType: "image", src: "image2", width: "100%", height: "360px", alt: "Mission" },
        },
        {
            type: "section",
            align: "center",
            gap: "2.5rem",
            left: {
                type: "text",
                title: "Werte, die uns leiten",
                description:
                    "Wir liefern stabil – auch bei Peak-Volumen. Sicherheit, Datenschutz und Zuverlässigkeit sind nicht verhandelbar.",
                bullets: ["Datenschutz by Design", "Partner statt Anbieter", "Operative Disziplin"],
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
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
                        image: "image3",
                        title: "Meilensteine",
                        description:
                            "2023: Prototyp • 2024: Pilot mit CH-Carriern • 2025: Rollout DACH",
                        buttonLink: "/timeline",
                        buttonText: "Mehr lesen",
                    },
                },
                {
                    block: {
                        type: "card",
                        image: "image4",
                        title: "Team",
                        description:
                            "Ingenieure, Dispatch-Profis und Operatoren mit langjähriger Logistik-Erfahrung.",
                        buttonLink: "/careers",
                        buttonText: "Karriere",
                    },
                },
                {
                    block: {
                        type: "card",
                        image: "image2",
                        title: "Sicherheit",
                        description:
                            "ISO-orientierte Prozesse, Datenhaltung in der EU/CH, least-privilege-Zugriffe.",
                        buttonLink: "/security",
                        buttonText: "Unsere Standards",
                    },
                },
            ],
        },
        {
            type: "slider",
            images: ["image2", "image3", "image4"],
        },
        {
            type: "faq",
            items: [
                { question: "Wo sitzt ShipsterAI?", answer: "In der Schweiz, mit europaweitem Partnernetz." },
                { question: "Unterstützt ihr KMU-Carrier?", answer: "Ja, das System ist speziell für KMU schnell einsatzbereit." },
                { question: "Welche Sprachen?", answer: "DE/FR/IT – abhängig von Region und Carrier." },
            ],
        },
    ],
};

export default aboutSchema;
