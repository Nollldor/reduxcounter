import React, {FC} from "react";
import styles from "./SimpleCounter.module.css"
import {Display} from "./Display/Display";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {increase, reset, StateType} from "../../store/reducer";
import {Button} from "../Component/Button";

type PropsType = {}

export const SimpleCounter: FC<PropsType> = ({}) => {

    const counter = useSelector<AppRootStateType, StateType>(state=> state.counter)
    const dispatch = useDispatch()

    const incOnClickHandler = () => {
        dispatch(increase())
    }

    const resetOnClickHandler = () => {
        dispatch(reset())
    }

    return <div className={styles.simpleCounter}>
        {counter.settingMode?
            <Display value={"please set new min-max values"}/>
            : <Display value={counter.count}/>}
        <div className={styles.buttonsContainer}>

            <Button disabled={counter.settingMode} onClick={incOnClickHandler} title={"inc"}/>
            <Button disabled={counter.settingMode} onClick={resetOnClickHandler} title={"reset"}/>
        </div>
    </div>
}