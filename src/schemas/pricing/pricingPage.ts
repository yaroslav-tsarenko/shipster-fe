import { PageSchema } from "@/constructor/page-render/types";

const pricingSchema: PageSchema = {
    meta: {
        title: "Preise – ShipsterAI",
        description:
            "Transparente, faire Preise für Schweizer Logistik. Monatliche Pläne, keine versteckten Gebühren.",
        keywords: ["preise", "kosten", "abo", "chf", "logistik"],
        canonical: "/pricing",
        ogImage: {
            title: "Preise in CHF",
            description: "Einfach starten. Skalieren, wenn es passt.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "section",
            align: "center",
            gap: "2rem",
            left: {
                type: "text",
                title: "Ein Preis. Klare Leistungen.",
                description:
                    "Alle Pläne enthalten Sicherheit, Support und Updates. 10% Service-Fee ist bereits eingerechnet – keine Aufpreise oben drauf.",
                centerTitle: true,
                centerDescription: true,
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
                        image: "image1",
                        title: "Starter",
                        description:
                            "CHF 0 / Monat • Pay-as-you-go\nFür kleine Teams und Tests. Basis-Funktionen und Self-Service.",
                        buttonLink: "/sign-up",
                        buttonText: "Kostenlos starten",
                    },
                },
                {
                    block: {
                        type: "card",
                        image: "image2",
                        title: "Pro",
                        description:
                            "CHF 199 / Monat\nErweiterte Routen, Kunden-Portal, einfache Integrationen.",
                        buttonLink: "/contact",
                        buttonText: "Pro anfragen",
                    },
                },
                {
                    block: {
                        type: "card",
                        image: "image3",
                        title: "Enterprise",
                        description:
                            "Preis auf Anfrage\nSLA, dedizierte Integrationen, individuelle Workflows.",
                        buttonLink: "/contact",
                        buttonText: "Gespräch vereinbaren",
                    },
                },
            ],
        },
        {
            type: "section",
            left: {
                type: "text",
                title: "Was ist inklusive?",
                description:
                    "Jeder Plan kommt mit Security-Updates, Monitoring und Zugang zu unserem Support. Pro/Enterprise enthalten zusätzlich einen dedizierten Success-Manager.",
                bullets: [
                    "Sicherheit und Updates",
                    "Ticket-Support (CH-Zeitzone)",
                    "Roadmap-Einfluss für Pro/Enterprise",
                ],
            },
            right: { type: "media", mediaType: "image", src: "image4", width: "100%", height: "360px", alt: "Preispaket" },
        },
        {
            type: "faq",
            items: [
                { question: "Ist die Service-Fee inbegriffen?", answer: "Ja, die 10% Service-Fee ist im Preis bereits enthalten." },
                { question: "Gibt es Rabatte?", answer: "Ja, bei Volumen oder Jahresbindung – wir rechnen offen in CHF." },
                { question: "Kündigungsfristen?", answer: "Monatlich kündbar, Enterprise nach individuellem Vertrag." },
            ],
        },
    ],
};

export default pricingSchema;
