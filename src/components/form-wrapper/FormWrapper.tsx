import React, {FC} from 'react';
import styles from './FormWrapper.module.scss';
import {FormWrapperProps} from "@/components/form-wrapper/types";
import {media} from "@/resources/media";
import Image from "next/image";
import Link from 'next/link';

const FormWrapper: FC<FormWrapperProps> = ({children, title, description}) => {
    return (
        <div className={styles.wrapper}>

            <div className={styles.form}>
                <div className={styles.titleContainer}>
                    <div className={styles.titles}>
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                    <Link href="/">
                        <Image src={media.logo} alt="Form Image" width={180} height={30} className={styles.logo}/>
                    </Link>
                </div>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default FormWrapper;