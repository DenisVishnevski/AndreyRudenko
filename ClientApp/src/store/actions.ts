import { ACTION_CHANGE_IS_CLICK } from './store';

export const changeIsClick = (newValue: number) => {
    return {
        type: ACTION_CHANGE_IS_CLICK,
        payload: newValue
    }
}
