"use client";

import React, { useEffect, useState } from "react";
import Popup from "@/components/popup/Popup";
import CustomButton from "@/ui/custom-button/CustomButton";

const getCookie = (name: string) => {
    if (typeof document === "undefined") return undefined;
    const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    return match ? decodeURIComponent(match[2]) : undefined;
};

const setCookie = (name: string, value: string, days = 365) => {
    if (typeof document === "undefined") return;
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
};

const CookiePolicy = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const accepted = getCookie("acceptedCookies");
        if (!accepted || accepted === "false") {
            setOpen(true);
        }
    }, []);

    const handleAccept = () => {
        setCookie("acceptedCookies", "true");
        setOpen(false);
    };

    const handleDecline = () => {
        setCookie("acceptedCookies", "false");
        setOpen(false);
    };

    return (
        <Popup open={open} onAccept={handleAccept} onDecline={handleDecline} title="Notice" description="We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. Do you consent to the use of cookies on this website?">
            <div style={{ marginTop: 16, display: "flex", gap: 8, justifyContent: "center" }}>
                <CustomButton color="blue" onClick={handleAccept}>Accept</CustomButton>
                <CustomButton color="green" onClick={handleDecline}>Decline</CustomButton>
            </div>
        </Popup>
    );
};

export default CookiePolicy;