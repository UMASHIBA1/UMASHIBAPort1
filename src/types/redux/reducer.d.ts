import {
    AddBackgroundSquarePropsAction,
    ChangeBackgroundSquarePropsAction
} from './actions'
import { backgroundSquareProp } from '../common/background-square'; 
import MainMarkProps from '../common/mainmarks';

export interface reduxState {
    backgroundSquareProps: backgroundSquareProp[];
    aboutMeProps:          MainMarkProps;
    createdProps:          MainMarkProps;
    toolsProps:            MainMarkProps;
    contactProps:          MainMarkProps;
}

export type rootReducerAction = AddBackgroundSquarePropsAction | 
ChangeBackgroundSquarePropsAction;
