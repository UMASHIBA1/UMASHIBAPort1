import { CHANGE_BACKGROUND_SQUARE_PROPS, ADD_BACKGROUND_SQUARE_PROPS } from '../constant/action-types';
import { backgroundSquareProp } from '../../types/common/background-square';
import { AddBackgroundSquarePropsAction, ChangeBackgroundSquarePropsAction } from '../../types/redux/actions';

export const ChangeBackgroundSquareProps = (payload: backgroundSquareProp[]):ChangeBackgroundSquarePropsAction => {
    return {type: CHANGE_BACKGROUND_SQUARE_PROPS,payload};
}

export const AddBackgroundSquareProps = (payload: backgroundSquareProp):AddBackgroundSquarePropsAction => {
    return {type: ADD_BACKGROUND_SQUARE_PROPS,payload};
}
