import { CHANGE_BACKGROUND_SQUARE_PROPS, ADD_BACKGROUND_SQUARE_PROPS, CHANGE_ABOUT_ME_PROPS, CHANGE_CREATED_PROPS } from '../constant/action-types';
import { backgroundSquareProp } from '../../types/common/background-square';
import { AddBackgroundSquarePropsAction, ChangeBackgroundSquarePropsAction, ChangeAboutMePropsAction, ChangeCreatedPropsAction } from '../../types/redux/actions';
import MainMarksProps from '../../types/common/mainmarks';

export const ChangeBackgroundSquareProps = (payload: backgroundSquareProp[]):ChangeBackgroundSquarePropsAction => {
    return {type: CHANGE_BACKGROUND_SQUARE_PROPS,payload};
}

export const AddBackgroundSquareProps = (payload: backgroundSquareProp):AddBackgroundSquarePropsAction => {
    return {type: ADD_BACKGROUND_SQUARE_PROPS,payload};
}

export const ChangeAboutMeProps = (payload:MainMarksProps):ChangeAboutMePropsAction => {
    return {type: CHANGE_ABOUT_ME_PROPS,payload};
}

export const ChangeCreatedProps = (payload:MainMarksProps): ChangeCreatedPropsAction => {
    return {type: CHANGE_CREATED_PROPS,payload};
}
