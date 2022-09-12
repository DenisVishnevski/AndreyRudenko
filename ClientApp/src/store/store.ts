import { createStore } from 'redux';
import { reducer } from './reducer';

export const ACTION_CHANGE_IS_CLICK: string = 'ACTION_CHANGE_IS_CLICK';
export const ACTION_CHANGE_SHOOTING_OPTIONS: string = 'ACTION_CHANGE_SHOOTING_OPTIONS';

const store = createStore(reducer);

export default store;