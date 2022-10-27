import React, {ChangeEvent, FC, useState} from "react";
import styles from "./Settings.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {setNewMaxValue, setNewMinValue, setValues, StateType, toggleSettingMode} from "../../store/reducer";
import {Input} from "../Input/Input";
import {Button} from "../Component/Button";

type PropsType = {}

export const Settings: FC<PropsType> = ({}) => {
    const counter = useSelector<AppRootStateType, StateType>(state => state.counter)
    const dispatch = useDispatch()



    const onChangeMin = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch(setNewMinValue(+e.currentTarget.value))
        dispatch(toggleSettingMode(true))
    }
    const onChangeMax = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch(setNewMaxValue(+e.currentTarget.value))
        dispatch(toggleSettingMode(true))
    }
    const setOnClickHandler = () => {
        dispatch(setValues())
        dispatch(toggleSettingMode(false))
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
            <Button disabled={!counter.settingMode} onClick={setOnClickHandler} title={"set"}/>
        </div>

    </div>
}