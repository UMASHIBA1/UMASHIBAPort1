import {
    AddBackgroundSquarePropsAction,
    ChangeBackgroundSquarePropsAction
} from './actions'
import { backgroundSquareProp } from '../common/background-square'; 

export interface reduxState {
    backgroundSquareProps: backgroundSquareProp[];
}

export type rootReducerAction = AddBackgroundSquarePropsAction | 
ChangeBackgroundSquarePropsAction;
