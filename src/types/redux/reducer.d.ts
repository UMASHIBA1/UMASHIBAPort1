import {
    AddBackgroundSquarePropsAction,
    ChangeBackgroundSquarePropsAction
} from './actions'
import { backgroundSquareProp } from '../common/background-square'; 
import MainMarkProps, { MainMarksProps } from '../common/mainmarks';

export interface reduxState {
    backgroundSquareProps: backgroundSquareProp[];
    aboutMeProps: MainMarksProps;
    createdProps: MainMarkProps;
}

export type rootReducerAction = AddBackgroundSquarePropsAction | 
ChangeBackgroundSquarePropsAction;
