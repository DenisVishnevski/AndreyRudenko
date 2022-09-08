import { createStore } from 'redux';
import { reducer } from './reducer';

export const ACTION_CHANGE_IS_CLICK: string = 'ACTION_CHANGE_IS_CLICK';

const store = createStore(reducer);

export default store;

console.log(store.getState());