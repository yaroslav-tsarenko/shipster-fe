import React from "react";
import Media from "@/constructor/image/Media";
import CustomButton from "@/ui/custom-button/CustomButton";
import styles from "./Card.module.scss";
import {StaticImageData} from "next/image";

interface CardProps {
    image: StaticImageData;
    title: string;
    description: string;
    buttonText?: string;
    buttonLink?: string;
}

const Card: React.FC<CardProps> = ({ image, title, description, buttonText, buttonLink }) => (
    <div className={styles.card}>
        <div className={styles.imageWrapper}>
            <Media src={image} type="image" width="100%" height="180px" alt={title} objectFit="cover" />
        </div>
        <div className={styles.content}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            {buttonText && buttonLink && (
                <a href={buttonLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                    <CustomButton type="button" sx={{ width: "100%", marginTop: "1rem" }}>
                        {buttonText}
                    </CustomButton>
                </a>
            )}
        </div>
    </div>
);

export default Card;