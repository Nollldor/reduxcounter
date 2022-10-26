import React, {FC} from "react";
import styles from './Display.module.css'

type PropsType = {
    value: number
}

export const Display:FC<PropsType> = ({value}) => {
    return <div className={styles.displayContainer}>
        <div>{value}</div>
    </div>
}