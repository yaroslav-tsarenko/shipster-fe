import React from 'react';
import styles from "./NotFound.module.scss";
import CustomButton from "@/ui/custom-button/CustomButton";
import Link from 'next/link';

const NotFoundComponent = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h1>404 :(</h1>
                    <p>This page doesnt exist, maybe in the future we will create this page, but currently you need to
                        return home.</p>
                </div>
                <CustomButton>
                    <Link href="/">
                        Go Home
                    </Link>
                </CustomButton>
            </div>
        </div>
    );
};

export default NotFoundComponent;