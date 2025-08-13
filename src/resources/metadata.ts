import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
    title: "AllShip – Logistics Simplified",
    description: "AllShip helps you find the best freight carriers for your move or shipment.",
};

export const metadataByRoute: Record<string, Metadata> = {
    "/": {
        title: "Home – AllShip",
        description: "Smart logistics for individuals and businesses.",
    },
    "/about": {
        title: "About Us – AllShip",
        description: "Learn more about AllShip’s mission and technology.",
    },
    "/blog": {
        title: "Logistics Blog – AllShip",
        description: "Stay updated with the latest logistics tips and insights.",
    },
    "/sign-in": {
        title: "Sign In – AllShip",
        description: "Access your AllShip account securely.",
    },
    "/sign-up": {
        title: "Create Account – AllShip",
        description: "Join AllShip to simplify your logistics today.",
    },
};
