export type StateType = {
    count: number
    minValue: number
    maxValue: number
    newMinValue: number
    newMaxValue: number
    settingMode: boolean
    error: null | string
}

const InitialState: StateType = {
    count: 0,
    maxValue: 10,
    minValue: 0,
    newMinValue: 0,
    newMaxValue: 10,
    settingMode: false,
    error: null
}

type ActionsType = ReturnType<typeof increase>
    | ReturnType<typeof reset>
    | ReturnType<typeof setValues>
    | ReturnType<typeof setNewMinValue>
    | ReturnType<typeof setNewMaxValue>
    | ReturnType<typeof toggleSettingMode>
    | ReturnType<typeof setError>

export const reducer = (state: StateType = InitialState, action: ActionsType) => {
    switch (action.type) {
        case 'INCREASE-COUNT':
            return {...state, count: state.count + 1 <= state.maxValue ? state.count + 1 : state.count}
        case 'RESET-COUNT':
            return {...state, count: state.minValue}
        case 'SET-VALUES':
            return {...state, minValue: state.newMinValue, maxValue: state.newMaxValue, count: state.newMinValue}
        case 'SET-NEW-MIN':
            return {...state, newMinValue: action.value}
        case 'SET-NEW-MAX':
            return {...state, newMaxValue: action.value}
        case 'TOGGLE-SETTING-MODE':
            return {...state, settingMode: action.value}
        case 'SET-ERROR':
            return {...state, error: action.value}
        default:
            return state
    }
}

export const increase = () => ({
    type: 'INCREASE-COUNT'
} as const)

export const reset = () => ({
    type: 'RESET-COUNT'
} as const)

export const setValues = () => ({
    type: 'SET-VALUES'
} as const)

export const setNewMinValue = (value: number) => ({
    type: 'SET-NEW-MIN',
    value
} as const)

export const setNewMaxValue = (value: number) => ({
    type: 'SET-NEW-MAX',
    value
} as const)

export const toggleSettingMode = (value: boolean) => ({
    type: 'TOGGLE-SETTING-MODE',
    value
} as const)

export const setError = (value: null | string) => ({
    type: 'SET-ERROR',
    value
} as const)