import { ACTION_CHANGE_NAME, ACTION_CHANGE_PHONE_NUMBER, ACTION_CHANGE_IS_CLICK } from './store';

export const changeName = (newName: string) => {
    
    return {
        type: ACTION_CHANGE_NAME,
        payload: newName
    }
}
export const changePhoneNumber = (newNumber: string) => {
    return {
        type: ACTION_CHANGE_PHONE_NUMBER,
        payload: newNumber
    }
}
export const changeIsClick = (newValue: number) => {
    return {
        type: ACTION_CHANGE_IS_CLICK,
        payload: newValue
    }
}
