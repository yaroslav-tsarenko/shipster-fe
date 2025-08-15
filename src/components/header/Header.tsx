"use client";

import React, {useEffect} from 'react';
import Logo from "@/assets/logo/logo.svg";
import styles from './Header.module.scss';
import Image from "next/image";
import CustomButton from "@/ui/custom-button/CustomButton";
import {content} from "@/resources/content";
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import {MenuButton} from "@mui/joy";
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
import {usePathname} from "next/navigation";
import {useUser} from "@/context/UserContext";

const languageOptions = [
    {code: 'en', label: 'English', flag: '🇬🇧'},
    {code: 'sv', label: 'Sweden', flag: '🇸🇪'}
];

const specialRoutes = ["/sign-up", "/sign-in", "/sign-up-carrier"];

const Header = () => {
    const pathname = usePathname();
    const user = useUser();
    const [lang, setLang] = React.useState('en');
    const [isSticky, setIsSticky] = React.useState(false);
    const headerRef = React.useRef<HTMLDivElement>(null);
    const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL;
    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                setIsSticky(window.scrollY > 0);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const {title, nav, signIn, signUp} = content[lang].header;
    const currentLang = languageOptions.find(l => l.code === lang);

    if (specialRoutes.includes(pathname)) {
        return (
            <header className={styles.specialHeader}>
                <div className={styles.specialInner}>
                    <Link href="/" className={styles.logoLink}>
                        <Image src={Logo} alt="Logo" width={160} height={20} className={styles.logo}/>
                    </Link>
                    <div className={styles.securityText}>
                        We use crypto hashed auth methods to protect your data
                    </div>
                </div>
            </header>
        );
    }

    return (
        <header
            ref={headerRef}
            className={`${styles.header} ${isSticky ? styles.sticky : ''}`}
        >
            <div className={styles.inner}>
                <Link href="/" className={styles.logoLink}>
                    <Image src={Logo} alt={title} width={160} height={20} className={styles.logo}/>
                </Link>
                <nav className={styles.nav}>
                    {nav.map((item: { label: string; href: string }) => (
                        <a key={item.href} href={item.href}>{item.label}</a>
                    ))}
                </nav>
                <div className={styles.authButtons}>
                    <Dropdown>
                        <MenuButton variant="plain" endDecorator={<KeyboardArrowDown/>}>
                            {currentLang?.label || 'English'}
                        </MenuButton>
                        <Menu>
                            {languageOptions.map(option => (
                                <MenuItem
                                    key={option.code}
                                    selected={option.code === lang}
                                    onClick={() => setLang(option.code)}
                                >
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Dropdown>
                    {user ? <>
                        <CustomButton href={DASHBOARD_URL}>Go to app</CustomButton>
                    </> : <>
                        <CustomButton href="sign-in">{signIn}</CustomButton>
                        <CustomButton color="green" href="sign-up">{signUp}</CustomButton>
                    </>}

                </div>
            </div>
        </header>
    );
};

export default Header;