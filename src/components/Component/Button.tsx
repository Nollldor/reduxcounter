import {FC} from "react";
import styles from './Button.module.css'

type PropsType = {
    disabled: boolean
    onClick: () => void
    title: string
    error? : null | string
}

export const Button:FC<PropsType> = ({disabled, title, onClick, error}) => {
    const className = `${styles.button} ${error ? styles.buttonError : ''}`

    return <button className={className} disabled={disabled} onClick={onClick}>{title}</button>
}