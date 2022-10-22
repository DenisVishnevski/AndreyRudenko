import { ACTION_CHANGE_IS_AUTOSCROLLING, ACTION_CHANGE_IS_CLICK, ACTION_CHANGE_SHOOTING_OPTIONS } from './store';

export const changeIsClick = (newValue: number) => {
    return {
        type: ACTION_CHANGE_IS_CLICK,
        payload: newValue
    }
}
export const changeShootingOptions = (newValue: object) => {
    return {
        type: ACTION_CHANGE_SHOOTING_OPTIONS,
        payload: newValue
    }
}
export const changeIsAutoScrolling = (newValue: boolean) => {
    return {
        type: ACTION_CHANGE_IS_AUTOSCROLLING,
        payload: newValue
    }
}
