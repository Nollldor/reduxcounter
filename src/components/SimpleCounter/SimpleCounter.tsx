import React, {FC} from "react";
import styles from "./SimpleCounter.module.css"
import {Display} from "../Display/Display";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {increase, reset, StateType} from "../../store/reducer";

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

    console.log(counter)

    return <div className={styles.simpleCounter}>
        <Display value={counter.count}/>
        <div className={styles.buttonsContainer}>
            <button onClick={incOnClickHandler}>inc</button>
            <button onClick={resetOnClickHandler}>reset</button>
        </div>
    </div>
}