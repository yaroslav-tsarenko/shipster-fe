import {PageSchema} from "@/constructor/page-render/types";

const schema: PageSchema = {
    meta: {
        title: "ShipsterAI — AI Logistics for Sweden",
        description: "Next-gen AI logistics platform for carriers and shippers in Sweden.",
        keywords: ["logistics", "ai", "sweden"],
        canonical: "/",
        ogImage: {
            title: "ShipsterAI",
            description: "AI-powered logistics. Fast. Accurate. Automated.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "media",
            mediaType: "video",
            src: "video1",
            width: "100%",
            height: "500px",
            controls: false,
            loop: true,
            autoPlay: true,
            muted: true,
        },
        {
            type: "section",
            left: { type: "media", mediaType: "image", src: "image1", width: "100%", height: "400px", alt: "AI Logistics Platform" },
            right: {
                type: "text",
                title: "AI-Powered Logistics in Sweden",
                description:
                    "ShipsterAI is the next-generation AI logistics platform built for Sweden. It connects local carriers and customers with unmatched speed, accuracy, and automation.",
                bullets: [
                    "Instant AI-based load matching",
                    "Trusted by thousands of Swedish carriers",
                    "Optimized freight routes and real-time updates",
                ],
            },
        },
        {
            type: "section",
            left: {
                type: "text",
                title: "Why Choose ShipsterAI?",
                description:
                    "ShipsterAI combines machine learning, route prediction, and logistics intelligence to automate your supply chain. Get competitive pricing and reduced carbon footprint with every shipment.",
                bullets: [
                    "AI route and pricing prediction",
                    "Supports all shipment types: LTL, FTL, Pallets",
                    "Fully digital logistics for the Swedish market",
                ],
            },
            right: { type: "media", mediaType: "image", src: "image2", width: "100%", height: "400px", alt: "AI Route Optimization" },
        },
        {
            type: "section",
            left: { type: "media", mediaType: "image", src: "image3", width: "100%", height: "400px", alt: "Carrier Dashboard" },
            right: {
                type: "text",
                title: "Powerful Dashboard for Swedish Carriers",
                description:
                    "Find relevant loads in seconds, avoid deadhead miles, and maximize fuel efficiency. ShipsterAI empowers Swedish drivers with intelligent decision-making tools.",
                bullets: ["Smart load recommendations", "Reduce fuel and maintenance costs", "Real-time support and status updates"],
            },
        },
        {
            type: "section",
            left: {
                type: "text",
                title: "Built for Sweden",
                description:
                    "Our system is tailored for the Swedish logistics infrastructure, ensuring regulatory compliance, language localization, and local route knowledge.",
                bullets: ["Swedish regulations ready", "Built-in localization features", "Integrated with Nordic carriers"],
            },
            right: { type: "media", mediaType: "image", src: "image4", width: "100%", height: "400px", alt: "Built for Sweden" },
        },
        {
            type: "section",
            align: "center",
            gap: "3rem",
            left: {
                type: "text",
                title: "Ready to Ship with Intelligence?",
                description:
                    "Join the logistics revolution in Sweden with ShipsterAI. Whether you're a customer or a carrier, our AI tools give you the upper hand.",
                bullets: ["Instant onboarding", "AI load & route planning", "24/7 live tracking system"],
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
            },
        },
        {
            type: "grid",
            columns: 4,
            gap: "2rem",
            style: { margin: "3rem 0" },
            cards: [
                { image: "image1", title: "AI Logistics Platform", description: "Next-gen AI logistics for Sweden. Fast, accurate, automated.", buttonLink: "/sign-up", buttonText: "Get Started" },
                { image: "image2", title: "Route Optimization", description: "AI-powered route prediction for cost and carbon savings.", buttonLink: "/sign-up", buttonText: "Get Started" },
                { image: "image3", title: "Carrier Dashboard", description: "Empower Swedish carriers with smart load recommendations.", buttonLink: "/sign-up", buttonText: "Get Started" },
                { image: "image4", title: "Built for Sweden", description: "Tailored for Swedish regulations and local infrastructure.", buttonLink: "/sign-up", buttonText: "Get Started" },
            ],
        },
        {
            type: "text",
            title: "Powerful Dashboard for Swedish Carriers",
            description:
                "Find relevant loads in seconds, avoid deadhead miles, and maximize fuel efficiency. ShipsterAI empowers Swedish drivers with intelligent decision-making tools.",
            centerTitle: true,
            centerDescription: true,
        },
        {
            type: "slider",
            images: ["image2", "image2", "image3", "image4"],
        },
        {
            type: "faq",
            items: [
                { question: "What is ShipsterAI?", answer: "ShipsterAI is an AI-powered logistics platform for Sweden." },
                { question: "How do I sign up?", answer: "Click the 'Get Started' button and follow the instructions." },
                { question: "Is my data secure?", answer: "Yes, we use industry-standard security protocols." },
            ],
        },
    ],
};

export default schema;
