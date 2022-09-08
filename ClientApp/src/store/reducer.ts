import { ACTION_CHANGE_IS_CLICK } from './store';

const initialState = {
    name: '',
    phoneNumber: '',
    isClick: 0
}

export const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ACTION_CHANGE_IS_CLICK:
            return { ...state, isClick: action.payload }
    }
    return state;
}