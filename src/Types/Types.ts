export enum CALC_ACTIONS {
    ADD_DIGIT = 'add-digit',
    DELETE_DIGIT = 'delete-digit',
    OPERATION = 'operation',
    CLEAR = 'clear',
    EVALUATE = 'evaluate'
}

export type ActionType = {
    type: CALC_ACTIONS
    payload: string
}
export type InitialState = {
    currentValue: string
    previousValue: string
    operation: string
    alreadyEvaluated: boolean
}