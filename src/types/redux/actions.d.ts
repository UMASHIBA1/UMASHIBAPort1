import { TYPE_CHANGE_BACKGROUND_SQUARE_PROPS, TYPE_ADD_BACKGROUND_SQUARE_PROPS } from './action-types';

export interface ChangeBackgroundSquarePropsAction {
    type: TYPE_CHANGE_BACKGROUND_SQUARE_PROPS;
    payload: object;
}

export interface AddBackgroundSquarePropsAction {
    type: TYPE_ADD_BACKGROUND_SQUARE_PROPS;
    payload: object;
}
