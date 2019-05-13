import {
    AddBackgroundSquarePropsAction,
    ChangeBackgroundSquarePropsAction
} from './actions'
import { backgroundSquareProp } from '../common/background-square'; 
import { MainMarksProps } from '../common/mainmarks';

export interface reduxState {
    backgroundSquareProps: backgroundSquareProp[];
    aboutMeProps: MainMarksProps;
}

export type rootReducerAction = AddBackgroundSquarePropsAction | 
ChangeBackgroundSquarePropsAction;
