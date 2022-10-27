import {ChangeEvent, FC} from "react";

type PropsType = {
    value: number
    onChange: (e:ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<PropsType> = ({value,onChange}) => {


    return <input type="number" value={value} onChange={onChange}/>
}