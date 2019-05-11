import { TYPE_CHANGE_BACKGROUND_SQUARE_PROPS, TYPE_ADD_BACKGROUND_SQUARE_PROPS } from './action-types';
import { backgroundSquareProp } from '../common/background-square';

export interface ChangeBackgroundSquarePropsAction {
    type: TYPE_CHANGE_BACKGROUND_SQUARE_PROPS;
    payload: backgroundSquareProp[];
}

export interface AddBackgroundSquarePropsAction {
    type: TYPE_ADD_BACKGROUND_SQUARE_PROPS;
    payload: backgroundSquareProp;
}

export type ChangeBackgroundSquarePropsActionWithDispatch = (payload:backgroundSquareProp[]) => ChangeBackgroundSquarePropsAction;

export type AddBackgroundSquarePropsActionWithDispatch = (payload: backgroundSquareProp) => AddBackgroundSquarePropsAction;
