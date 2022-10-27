import {ChangeEvent, FC} from "react";
import styles from './Input.module.css'

type PropsType = {
    value: number
    onChange: (e:ChangeEvent<HTMLInputElement>) => void
    error? : null | string
}

export const Input: FC<PropsType> = ({value,onChange, error}) => {

    const className = `${styles.input} ${error ? styles.inputError : ''}`

    return <input className={className} type="number" value={value} onChange={onChange}/>
}