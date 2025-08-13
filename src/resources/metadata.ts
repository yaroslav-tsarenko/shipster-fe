import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
    title: "ShipsterAI – AI-driven logistikplattform",
    description: "ShipsterAI effektiviserar din logistik med avancerad AI och gör frakt smartare och enklare för alla.",
    keywords: [
        "AI logistik",
        "frakt",
        "transport",
        "automation",
        "ShipsterAI",
        "logistikplattform",
        "Sverige",
        "företag",
        "individ",
        "smarta leveranser"
    ],
    robots: "index, follow"
};

export const metadataByRoute: Record<string, Metadata> = {
    "/": {
        title: "Hem – ShipsterAI",
        description: "Välkommen till ShipsterAI, framtidens smarta logistik för privatpersoner och företag.",
        keywords: [
            "AI logistik",
            "frakt",
            "transport",
            "ShipsterAI",
            "smarta leveranser",
            "Sverige"
        ],
        robots: "index, follow"
    },
    "/about": {
        title: "Om oss – ShipsterAI",
        description: "Läs om ShipsterAI:s uppdrag och hur vår AI-teknik förändrar logistikbranschen.",
        keywords: [
            "AI logistik",
            "om ShipsterAI",
            "teknik",
            "innovation",
            "Sverige"
        ],
        robots: "index, follow"
    },
    "/blog": {
        title: "Logistikblogg – ShipsterAI",
        description: "Ta del av de senaste insikterna och tipsen om AI-driven logistik från ShipsterAI:s experter.",
        keywords: [
            "AI logistik",
            "blogg",
            "tips",
            "frakt",
            "automation"
        ],
        robots: "index, follow"
    },
    "/contact": {
        title: "Kontakta oss – ShipsterAI",
        description: "Kontakta ShipsterAI för support, partnerskap eller allmänna frågor.",
        keywords: [
            "kontakt",
            "support",
            "ShipsterAI",
            "Sverige"
        ],
        robots: "index, follow"
    },
    "/pricing": {
        title: "Priser – ShipsterAI",
        description: "Utforska ShipsterAI:s flexibla prisplaner för privatpersoner och företag.",
        keywords: [
            "priser",
            "kostnad",
            "logistik",
            "ShipsterAI"
        ],
        robots: "index, follow"
    },
    "/services": {
        title: "Tjänster – ShipsterAI",
        description: "Upptäck ShipsterAI:s kompletta utbud av AI-drivna logistiktjänster.",
        keywords: [
            "tjänster",
            "AI logistik",
            "automation",
            "ShipsterAI"
        ],
        robots: "index, follow"
    },
    "/sign-in": {
        title: "Logga in – ShipsterAI",
        description: "Logga in på ditt ShipsterAI-konto och hantera dina leveranser.",
        keywords: [
            "logga in",
            "konto",
            "ShipsterAI",
            "Sverige"
        ],
        robots: "noindex, follow"
    },
    "/sign-up": {
        title: "Skapa konto – ShipsterAI",
        description: "Registrera dig hos ShipsterAI och upplev nästa generations logistik.",
        keywords: [
            "skapa konto",
            "registrering",
            "ShipsterAI",
            "logistik"
        ],
        robots: "noindex, follow"
    },
    "/page": {
        title: "Sida – ShipsterAI",
        description: "ShipsterAI: AI-driven logistikplattform för alla dina fraktbehov.",
        keywords: [
            "AI logistik",
            "plattform",
            "ShipsterAI",
            "frakt"
        ],
        robots: "index, follow"
    },
    "/layout": {
        title: "Layout – ShipsterAI",
        description: "ShipsterAI:s plattformsdesign och navigation.",
        keywords: [
            "layout",
            "design",
            "ShipsterAI",
            "navigation"
        ],
        robots: "noindex, follow"
    },
    "/not-found": {
        title: "Sidan hittades inte – ShipsterAI",
        description: "Tyvärr, sidan du söker finns inte. Kontrollera webbadressen eller gå tillbaka till startsidan.",
        keywords: [
            "404",
            "sidan hittades inte",
            "ShipsterAI",
            "logistik",
            "fel"
        ],
        robots: "noindex, follow"
    },
};