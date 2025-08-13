"use client";

import React from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';
import logo from "@/assets/logo/logo-white-blue-bg.svg"
import { FaTiktok, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import Link from 'next/link';
import { usePathname } from "next/navigation";

const hiddenRoutes = ["/sign-in", "/sign-up", "/sign-up-carrier"];

const Footer = () => {
    const pathname = usePathname();
    const currentYear = new Date().getFullYear();

    if (hiddenRoutes.includes(pathname)) {
        return (
            <div className={styles.footerBottom}>
                <p>All rights are reserved. Copyright {currentYear}. </p>
            </div>
        );
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.footerUpper}>
                <div className={styles.footerUpperInner}>
                    <div className={styles.column}>
                        <Image src={logo} alt="Logo" width={160} height={20} className={styles.logo}/>
                        <p>
                            AI-Powered platform offers smart shipping solutions, real-time tracking, and seamless
                            logistics management for businesses of all sizes.
                        </p>
                    </div>
                    <div className={styles.column}>
                        <h4>Quick Links</h4>
                        <div className={styles.content}>
                            <Link href="/home" className={styles.link}>Home</Link>
                            <Link href="/home" className={styles.link}>About</Link>
                            <Link href="/home" className={styles.link}>Services</Link>
                            <Link href="/home" className={styles.link}>Pricing</Link>
                            <Link href="/home" className={styles.link}>Blog</Link>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <h4>Product</h4>
                        <div className={styles.content}>
                            <Link href="/home" className={styles.link}>Privacy policy</Link>
                            <Link href="/home" className={styles.link}>Terms and Conditions</Link>
                            <Link href="/home" className={styles.link}>Cookie policy</Link>
                            <Link href="/home" className={styles.link}>User Agreement</Link>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <h4>Contact</h4>
                        <div className={styles.content}>
                            <Link href="/home" className={styles.link}>support@shipster.se</Link>
                            <Link href="/home" className={styles.link}>+46 8 123 4567</Link>
                            <Link href="/home" className={styles.link}>Vasagatan 10, 111 20 Stockholm, Sweden</Link>
                        </div>
                        <div className={styles.socials}>
                            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok/></a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>All rights are reserved. Copyright {currentYear}. </p>
            </div>
        </footer>
    );
};

export default Footer;