import { ACTION_CHANGE_IS_CLICK, ACTION_CHANGE_SHOOTING_OPTIONS } from './store';

const initialState = {  
    isClick: 0,
    shootingOptions: { baseOption: "", otherOption: "" }
}

export const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ACTION_CHANGE_IS_CLICK:
            return { ...state, isClick: action.payload }
        case ACTION_CHANGE_SHOOTING_OPTIONS:
            return { ...state, shootingOptions: action.payload }
    }
    return state;
}