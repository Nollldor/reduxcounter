import React, {FC} from "react";
import styles from './Inputs.module.css'

type PropsType = {

}

export const Inputs:FC<PropsType> = ({}) => {
    return <div className={styles.inputsContainer}>
        <div>
            <span>start value: </span> <input type="number"/>
        </div>
        <div>
            <span>max value: </span> <input type="number"/>
        </div>
    </div>
}