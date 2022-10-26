import React, {FC} from "react";
import styles from "./Settings.module.css"
import {Inputs} from "../Inputs/Inputs";

type PropsType = {

}

export const Settings: FC<PropsType> = ({}) => {

    return <div className={styles.settings}>
            <Inputs/>
            <div className={styles.buttonsContainer}>
                <button>set</button>
            </div>

    </div>
}