import React, {FC} from 'react';
import styles from "./Divider.module.scss";
import {DividerProps} from "@/ui/divider/types";

const Divider:FC<DividerProps> = ({title}) => {
    return (
        <div className={styles.wrapper}>
           <hr/>
            <p>
                {title}
            </p>
            <hr/>
        </div>
    );
};

export default Divider;