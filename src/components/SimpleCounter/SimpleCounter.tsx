import React, {FC} from "react";
import styles from "./SimpleCounter.module.css"
import {Display} from "./Display/Display";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {increase, reset, StateType} from "../../store/reducer";
import {Button} from "../Component/Button";

type PropsType = {}

export const SimpleCounter: FC<PropsType> = ({}) => {

    const counter = useSelector<AppRootStateType, StateType>(state => state.counter)
    const dispatch = useDispatch()

    const incOnClickHandler = () => {
        dispatch(increase())
    }

    const resetOnClickHandler = () => {
        dispatch(reset())
    }

    const displayTitle = counter.error ? counter.error
        : counter.settingMode ? "please set new min-max values"
            : counter.count

    return <div className={styles.simpleCounter}>
        <Display value={displayTitle}/>
        <div className={styles.buttonsContainer}>

            <Button disabled={counter.settingMode || Boolean(counter.error) || counter.count === counter.newMaxValue}
                    onClick={incOnClickHandler} title={"inc"}/>
            <Button disabled={counter.settingMode || Boolean(counter.error) || counter.count === counter.newMinValue}
                    onClick={resetOnClickHandler}
                    title={"reset"}/>
        </div>
    </div>
}