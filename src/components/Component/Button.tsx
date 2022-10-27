import {FC} from "react";

type PropsType = {
    disabled: boolean
    onClick: () => void
    title: string
}

export const Button:FC<PropsType> = ({disabled, title, onClick}) => {

    return <button disabled={disabled} onClick={onClick}>{title}</button>
}