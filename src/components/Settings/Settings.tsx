import React, {ChangeEvent, FC} from "react";
import styles from "./Settings.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {setError, setNewMaxValue, setNewMinValue, setValues, StateType, toggleSettingMode} from "../../store/reducer";
import {Input} from "../Input/Input";
import {Button} from "../Component/Button";

type PropsType = {}

export const Settings: FC<PropsType> = ({}) => {
    const counter = useSelector<AppRootStateType, StateType>(state => state.counter)
    const dispatch = useDispatch()


    const onChangeMin = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(toggleSettingMode(true))
        dispatch(setNewMinValue(+e.currentTarget.value))

        if (+e.currentTarget.value < counter.newMaxValue) {
            if (Boolean(counter.error)) {
                dispatch(setError(null))
            }
        } else {
            dispatch(setError("min value can't be more than max value"))
        }
    }
    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(toggleSettingMode(true))
        dispatch(setNewMaxValue(+e.currentTarget.value))

        if (+e.currentTarget.value > counter.newMinValue) {
            if (Boolean(counter.error)) {
                dispatch(setError(null))
            }
        } else {
            dispatch(setError("max value can't be less than min value"))
        }

    }
    const setOnClickHandler = () => {
        if (counter.newMinValue < counter.newMaxValue){
            dispatch(setValues())
            dispatch(toggleSettingMode(false))
        }
    }

    return <div className={styles.settings}>
        <div className={styles.inputsContainer}>
            <div>
                <span>min value: </span> <Input value={counter.newMinValue} onChange={onChangeMin}/>
            </div>
            <div>
                <span>max value: </span> <Input value={counter.newMaxValue} onChange={onChangeMax}/>
            </div>
        </div>
        <div className={styles.buttonsContainer}>
            <Button disabled={!counter.settingMode || Boolean(counter.error)} onClick={setOnClickHandler}
                    title={"set"}/>
        </div>

    </div>
}