import {CHANGE_BACKGROUND_SQUARE_PROPS, ADD_BACKGROUND_SQUARE_PROPS} from '../../redux/constant/action-types';

export interface ChangeBackgroundSquarePropsAction {
    type: typeof CHANGE_BACKGROUND_SQUARE_PROPS;
    payload: object;
}

export interface AddBackgroundSquarePropsAction {
    type: typeof ADD_BACKGROUND_SQUARE_PROPS;
    payload: object;
}
