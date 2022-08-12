import { createStore } from 'redux';
import { reducer } from './reducer';

export const ACTION_CHANGE_NAME: string = 'ACTION_CHANGE_NAME';
export const ACTION_CHANGE_PHONE_NUMBER: string = 'ACTION_CHANGE_PHONE_NUMBER';
export const ACTION_CHANGE_SLIDER_OFFSET: string = 'ACTION_CHANGE_SLIDER_OFFSET';



const store = createStore(reducer);

export default store;

console.log(store.getState());