import { CHANGE_BACKGROUND_SQUARE_PROPS, ADD_BACKGROUND_SQUARE_PROPS } from '../constant/action-types';
import { backgroundSquareProp } from '../../types/components/background/background-square';

export const ChangeBackgroundSquareProps = (payload: backgroundSquareProp[]) => {
    return {type: CHANGE_BACKGROUND_SQUARE_PROPS,payload};
}

export const AddBackgroundSquareProps = (payload: backgroundSquareProp) => {
    return {type: ADD_BACKGROUND_SQUARE_PROPS,payload};
}
