export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const SAVE_MEMORY = 'SAVE_MEMORY';
export const APPLY_MEMORY = 'APPLY_MEMORY';
export const RESET_MEMORY = 'RESET_MEMORY'

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operation) => {
    return({type:CHANGE_OPERATION, payload:operation});
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY});
}

export const saveMemory = () => {
    return({type:SAVE_MEMORY})
}

export const applyMemory = () => {
    return({type:APPLY_MEMORY})
}

export const resetMemory = () => {
    return({type:RESET_MEMORY})
}