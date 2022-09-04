import { ACTION_CHANGE_NAME, ACTION_CHANGE_PHONE_NUMBER, ACTION_CHANGE_IS_CLICK } from './store';

const initialState = {
    name: '',
    phoneNumber: '+7',
    isClick: 0
}

export const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ACTION_CHANGE_NAME:
            return { ...state, name: action.payload };
        case ACTION_CHANGE_PHONE_NUMBER:
            return { ...state, phoneNumber: action.payload };
        case ACTION_CHANGE_IS_CLICK:
            return { ...state, isClick: action.payload }
    }
    return state;
}