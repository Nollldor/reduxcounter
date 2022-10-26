export type StateType = {
    count: number
    minValue: number
    maxValue: number
}

const InitialState: StateType = {
    count: 0,
    maxValue: 10,
    minValue: 0,
}

type ActionsType = ReturnType<typeof increase> | ReturnType<typeof reset>

export const reducer = (state: StateType = InitialState, action: ActionsType) => {
    switch (action.type) {
        case 'INCREASE-COUNT':
            return {...state, count: state.count+1<=state.maxValue? state.count+1 : state.count}
        case 'RESET-COUNT':
            return {...state, count: state.minValue}
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