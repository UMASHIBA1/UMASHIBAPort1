import { TYPE_CHANGE_BACKGROUND_SQUARE_PROPS, TYPE_ADD_BACKGROUND_SQUARE_PROPS, TYPE_CHANGE_ABOUT_ME_PROPS, TYPE_CHANGE_CREATED_PROPS } from './action-types';
import { backgroundSquareProp } from '../common/background-square';
import MainMarkProps, { MainMarksProps } from '../common/mainmarks';

export interface ChangeBackgroundSquarePropsAction {
    type: TYPE_CHANGE_BACKGROUND_SQUARE_PROPS;
    payload: backgroundSquareProp[];
}

export interface AddBackgroundSquarePropsAction {
    type: TYPE_ADD_BACKGROUND_SQUARE_PROPS;
    payload: backgroundSquareProp;
}

export interface ChangeAboutMePropsAction {
    type: TYPE_CHANGE_ABOUT_ME_PROPS;
    payload: MainMarksProps
}

export interface ChangeCreatedPropsAction {
    type: TYPE_CHANGE_CREATED_PROPS;
    payload: MainMarkProps;
}

export type ChangeBackgroundSquarePropsActionWithDispatch = (payload: ChangeAboutMePropsAction.payload) => ChangeBackgroundSquarePropsAction;

export type AddBackgroundSquarePropsActionWithDispatch = (payload: AddBackgroundSquarePropsAction.payload) => AddBackgroundSquarePropsAction;

export type ChangeAboutMePropsActionWithDispatch = (payload: ChangeAboutMePropsAction.payload) => ChangeAboutMePropsAction;

export type ChangeCreatedPropsActionWithDispatch = (payload: ChangeCreatedPropsAction.payload) => ChangeCreatedPropsAction;
