import * as React from "react";
import { Dialog } from "@base-ui-components/react/dialog";
import styles from "./index.module.css";

type PopupProps = {
    open: boolean;
    onAccept: () => void;
    onDecline: () => void;
    title?: string;
    description?: string;
    children: React.ReactNode;
};

export default function Popup({ open, children, title, description }: PopupProps) {
    return (
        <Dialog.Root open={open}>
            <Dialog.Portal>
                <Dialog.Backdrop className={styles.Backdrop} />
                <Dialog.Popup className={styles.Popup}>
                    <Dialog.Title className={styles.Title}>{title}</Dialog.Title>
                    <Dialog.Description className={styles.Description}>
                        {description}
                    </Dialog.Description>
                    {children}
                </Dialog.Popup>
            </Dialog.Portal>
        </Dialog.Root>
    );
}