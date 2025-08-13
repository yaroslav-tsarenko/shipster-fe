import React from 'react';
import { media } from "@/resources/media";
import Media from '@/constructor/image/Media';
import Section from '@/constructor/section/Section';
import Text from '@/constructor/text/Text';

const Page = () => {
    return (
        <>
            <Media
                src="/videos/shipster_video_1.mp4"
                type="video"
                width="100%"
                height="500px"
                controls={false}
                loop
                autoPlay
                muted
            />
            <Section
                left={
                    <Media
                        src={media.image1}
                        type="image"
                        width="100%"
                        height="400px"
                        alt="AI Logistics Platform"
                    />
                }
                right={
                    <Text
                        title="AI-Powered Logistics in Sweden"
                        description="ShipsterAI is the next-generation AI logistics platform built for Sweden. It connects local carriers and customers with unmatched speed, accuracy, and automation."
                        bullets={[
                            "Instant AI-based load matching",
                            "Trusted by thousands of Swedish carriers",
                            "Optimized freight routes and real-time updates"
                        ]}
                    />
                }
            />

            <Section
                left={
                    <Text
                        title="Why Choose ShipsterAI?"
                        description="ShipsterAI combines machine learning, route prediction, and logistics intelligence to automate your supply chain. Get competitive pricing and reduced carbon footprint with every shipment."
                        bullets={[
                            "AI route and pricing prediction",
                            "Supports all shipment types: LTL, FTL, Pallets",
                            "Fully digital logistics for the Swedish market"
                        ]}
                    />
                }
                right={
                    <Media
                        src={media.image2}
                        type="image"
                        width="100%"
                        height="400px"
                        alt="AI Route Optimization"
                    />
                }
            />

            <Section
                left={
                    <Media
                        src={media.image3}
                        type="image"
                        width="100%"
                        height="400px"
                        alt="Carrier Dashboard"
                    />
                }
                right={
                    <Text
                        title="Powerful Dashboard for Swedish Carriers"
                        description="Find relevant loads in seconds, avoid deadhead miles, and maximize fuel efficiency. ShipsterAI empowers Swedish drivers with intelligent decision-making tools."
                        bullets={[
                            "Smart load recommendations",
                            "Reduce fuel and maintenance costs",
                            "Real-time support and status updates"
                        ]}
                    />
                }
            />
            <Section
                left={
                    <Text
                        title="Built for Sweden"
                        description="Our system is tailored for the Swedish logistics infrastructure, ensuring regulatory compliance, language localization, and local route knowledge."
                        bullets={[
                            "Swedish regulations ready",
                            "Built-in localization features",
                            "Integrated with Nordic carriers"
                        ]}
                    />
                }
                right={
                    <Media
                        src={media.image4}
                        type="image"
                        width="100%"
                        height="400px"
                        alt="Built for Sweden"
                    />
                }
            />

            <Section
                align="center"
                gap="3rem"
                left={
                    <Text
                        title="Ready to Ship with Intelligence?"
                        description="Join the logistics revolution in Sweden with ShipsterAI. Whether you're a customer or a carrier, our AI tools give you the upper hand."
                        bullets={[
                            "Instant onboarding",
                            "AI load & route planning",
                            "24/7 live tracking system"
                        ]}
                        centerTitle
                        centerDescription
                        centerBullets
                    />
                }
            />
        </>
    );
};

export default Page;
