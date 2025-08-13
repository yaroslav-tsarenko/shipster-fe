'use client';

import React, { createContext, useContext } from 'react';

export type Review = {
    name: string;
    secondName: string;
    rate: number;
    text: string;
    avatar?: string;
    reviewsCount: number;
    role: 'customer' | 'carrier' | 'driver' | 'admin';
};

export type User = {
    _id: string;
    name: string;
    secondName: string;
    email: string;
    phone: string;
    password: string;
    telegram: string;
    about: string;
    referralCode: string;
    companyUrl: string;
    companyName: string;
    balance: number;
    curator: string;
    serviceRating: number;
    serviceAgreement: number;
    serviceActivity: number;
    avatar: string;
    earnings: number;
    tariff: string;
    withdrawals: number;
    role: string;
    usdtWallet: string;
    btcWallet: string;
    reviews?: Review[];
    carrierEnteredAdditionalInfo: boolean;
    perfectMoneyWallet: string;
    ethereumWallet: string;
    date: string;
    tariffExpirationDate: string;
    payeerWallet: string;
    assignedLoads: string[];
    card: string;
    notifications: {
        notificationsEnabled: boolean;
        aiNotifications: boolean;
        carrierNotifications: boolean;
        loadNotifications: boolean;
        driverNotifications: boolean;
        updateNotifications: boolean;
    };
};

export const UserContext = createContext<User | undefined>(undefined);

export function useUser() {
    return useContext(UserContext);
}

export function UserProvider({ user, children }: { user: User; children: React.ReactNode }) {
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}